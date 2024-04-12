const express = require("express");
const http = require("http");
const app = express();
const socketIO = require("socket.io");
const server = http.createServer(app);

// socketIO(서버) http모듈기반 서버여야해서 app과 http둘 다 이용해서 서버생성
const io = socketIO(server);
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});
app.get("/room", (req, res) => {
  res.render("room");
});
app.get("/practice", (req, res) => {
  res.render("practice");
});

io.on("connection", (socket) => {
  console.log("socket id >> ", socket.id); //따로 생성 필요없이 원래 제공해줌
  //LDmZYR2_hQ6hfZXeAAAB
  //   socket.on("event_name", (arg1, arg2, arg3, cb) => {
  //     console.log(arg1);
  //     console.log(arg2);
  //     console.log(arg3);
  //     cb("응답");
  //   });

  socket.on("new_message", (message, cb) => {
    console.log(message);
    cb(message); //한 개의 클라이언트에게만 전송
  });

  socket.on("new_message", (message) => {
    io.emit("message_render", message); //모든 클라이언트에게 전송
  });
  socket.on("disconnect", () => {
    console.log(`${socket.id} 연결종료`);
  });
  //  room.ejs -----------------------------------------------------------------
  //   console.log("방 만들어지기 전", socket.rooms);
  // 2. 클라이언트에게 방이름을 전달받아서 방 생성
  socket.on("join", (chatRoom) => {
    // console.log(chatRoom);

    socket.join(chatRoom); //채팅방 만들기 join(방이름)
    // console.log("방 만들어지고 나서", socket.rooms);
    // { 'bupIVXq0PUPVxUo-AAAD', 'A' } {클라이언트 id, 방이름}
    socket.room = chatRoom;

    // 3. 내가 포함한 방 사람들에게 입장 메시지 전달
    // broadcast 나빼고 내가 참여한 채팅방 모두에게
    // socket.broadcast
    //   .to(chatRoom)
    //   .emit("userjoin", `${socket.id}님이 입장하셨습니다`);

    // 나 포함 내가 참여한 채팅방 모두에게
    io.to(chatRoom).emit("userjoin", `${socket.id}님이 입장하셨습니다`);
  });

  // 6. 하나의 클라이언트에게 메시지를 받아서 [특정 방의] 전체클라이언트에 전송
  socket.on("message", (message) => {
    console.log(message);
    io.to(socket.room).emit("message_toAll", message, socket.id);
  });

  //-----------------------------실습--------------------------
  socket.on("messagePrac", (message, cb) => {
    console.log(`msg:: ${message}`);
    if (message === "hello") cb(`${message}: 안녕하세요`);
    if (message === "study") cb(`${message}: 공부합시다`);
    if (message === "bye") cb(`${message}: 잘가`);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

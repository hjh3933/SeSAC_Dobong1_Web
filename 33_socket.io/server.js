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

const nickInfo = {};
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
  // socket.on("disconnect", () => {
  //   console.log(`${socket.id} 연결종료`);
  // });
  //  room.ejs -----------------------------------------------------------------
  //   console.log("방 만들어지기 전", socket.rooms);
  // 2. 클라이언트에게 방이름을 전달받아서 방 생성
  socket.on("join", (chatRoom, name) => {
    // console.log(chatRoom);

    // console.log(nickInfo);
    // console.log(Object.values(nickInfo)); //value만 배열로 반환

    //요소의 인덱스 반환, 없는 요소일 경우 -1반환
    if (Object.values(nickInfo).indexOf(name) > -1) {
      //중복닉네임
      socket.emit("error", "이미 존재하는 닉네임입니다.");
    } else {
      //사용가능 닉네임
      nickInfo[socket.id] = name;

      socket.join(chatRoom); //채팅방 만들기 join(방이름)
      // console.log("방 만들어지고 나서", socket.rooms);
      // { 'bupIVXq0PUPVxUo-AAAD', 'A' } {클라이언트 id, 방이름}
      socket.room = chatRoom;

      // 3. 내가 포함한 방 사람들에게 입장 메시지 전달
      // broadcast 나빼고 내가 참여한 채팅방 모두에게
      socket.emit("entrySuccess", name);
      socket.broadcast
        .to(chatRoom)
        .emit("userjoin", `${name}님이 입장하셨습니다`);

      // 나 포함 내가 참여한 채팅방 모두에게
      io.to(chatRoom).emit("updateNicks", nickInfo);
    }
  });

  // 6. 하나의 클라이언트에게 메시지를 받아서 [특정 방의] 전체클라이언트에 전송
  socket.on("message", (sendData) => {
    // const sendData = {
    //   myName,
    //   dm: select.value,
    //   msg: message,
    // };
    const { myName, dm, msg } = sendData;
    if (sendData.dm === "all") {
      io.to(socket.room).emit("message_toAll", msg, socket.id, myName);
    } else {
      //dm - 특정 소켓 아이디만 포임, 나는 안보임
      const isDm = true;
      io.to(dm).emit("message_toAll", msg, socket.id, myName, isDm);
      // 나에게만 보내주기
      socket.emit("message_toAll", msg, socket.id, myName, isDm);
    }
  });
  //퇴장
  socket.on("disconnect", () => {
    // notice ~님이 퇴장하셨습니다. 공고 화면에 띄우기
    socket.broadcast
      .to(socket.room)
      .emit("userjoin", `${nickInfo[socket.id]}님이 퇴장하셨습니다`);
    // nickInfo {}에서 특정 키 삭제
    delete nickInfo[socket.id];
    // 클라이언트에게 변경된 객체 정보 전달
    io.to(socket.room).emit("updateNicks", nickInfo);
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

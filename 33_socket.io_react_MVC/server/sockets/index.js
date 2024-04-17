const socketIO = require("socket.io");
function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  const nickInfo = {};
  //{socket.id: 닉네임}
  io.on("connection", (socket) => {
    // io.emit("notice", `${socket.id}님이 입장하셨습니다`);

    socket.on("checkNick", (nickname) => {
      // console.log(nickname);

      //닉네임 사용2: 중복체크후 성공 or 실패에 따라 emit, 배열 추가 등의 작업진행
      //Object.values = ["닉네임1", "닉네임2"]
      if (Object.values(nickInfo).includes(nickname)) {
        //닉네임 중복 -> 입장실패
        socket.emit("error", "이미 존재하는 닉네임입니다");
      } else {
        //중복없음 -> 입장성공
        // (1) nickInfo에 닉네임 정보 넣기
        nickInfo[socket.id] = nickname;
        // (2) 입장 성공 닉네임 정보 전달
        socket.emit("entrySuccess", nickname);
        // (3) 나를 제외한 전체 클라이언트에게 입장알림
        socket.broadcast.emit(
          "notice",
          `${nickInfo[socket.id]}님이 입장하셨습니다`
        );
        // (4) 전체 클라이언트에게 nickInfo 목록 전달
        io.emit("updateNicks", nickInfo);
      }
    });

    socket.on("send", (msgData) => {
      const { dm, msg, myNick } = msgData;
      // msgData = { dm, msg, myNick};
      if (dm === "all") {
        //전체전송
        io.emit("message", {
          id: myNick,
          message: msg,
        });
      } else {
        //dm - you
        io.to(dm).emit("message", {
          id: myNick,
          message: msg,
          isDm: true,
        });
        //dm - me
        socket.emit("message", {
          id: myNick,
          message: msg,
          isDm: true,
        });
      }
    });

    socket.on("disconnect", () => {
      io.emit("notice", `${nickInfo[socket.id]}님이 퇴장하셨습니다`);
      delete nickInfo[socket.id]; //삭제작업 필수!
      io.emit("updateNicks", nickInfo);
    });
  });
}

module.exports = socketHandler;

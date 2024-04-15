const socketIO = require("socket.io");
function socketHandler(server) {
  //server: app.js에서 http 기반 서버 전달받을 예정
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  io.on("connection", (socket) => {
    socket.on("test", (message) => {
      console.log(message);
      socket.emit("test2", "잘 받았습니다");
    });
    socket.on("hello", (msg, cb) => {
      console.log("client >>", msg);
      cb("server :: " + msg);
    });
    socket.on("study", (msg, cb) => {
      console.log("client >>", msg);
      cb("server :: " + msg);
    });
    socket.on("bye", (msg, cb) => {
      console.log("client >>", msg);
      cb("server :: " + msg);
    });

    socket.on("disconnect", () => {
      //클라이언트 연결 해제
    });
  });
}

module.exports = socketHandler;

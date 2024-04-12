const express = require("express");
const app = express();
const ws = require("ws");
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
// console.log(server); //Server 객체

// 웹소켓 서버 접속
const wsServer = new ws.Server({ server });
const sockets = []; //클라이언트들을 담을 배열

// return string
// 현재 시간관련 타임스탬프와 랜덤 문자열을 결함 > 고유 식별자 생성
function generateUniqueId() {
  // 타임스탬프
  const timestamp = Date.now().toString(36); //36진수로 반환한 문자열
  // 랜덤문자열
  const randomString = Math.random().toString(36).substring(2); //subString(a) a번 인덱스부터 끝까지 반환
  return timestamp + randomString;
}

/*
 ws모듈(설치필요)의 이벤트
 - connection: 클라이언트와 웹소켓 서버와 연결되었을 때
 - message: 클라이언트로부터 메시지를 받았을 때
 - error: 연결 중에 오류가 났을 때
 - close: 클라이언트와 연결 종료
*/

wsServer.on("connection", (socket) => {
  //   console.log(socket); //클라이언트에 대한 소켓정보
  console.log("connection!?!!?!??!");
  const clientId = generateUniqueId();
  sockets.push(socket);
  // socket은 지금연결된 하나의 클라이언트이다(각 하나)
  socket.on("message", (message) => {
    //buffer -> string
    // const bufferToString = message.toString("utf8");
    // console.log(bufferToString);
    // 변환과정 거치지 않아도 ``백틱, 템플릿 리터럴 사용시 정상적인 문자열 형태로 전송된다
    console.log(`${message}`); //버퍼 객체

    //모든 클라이언트에게 동일한 메시지를 보내기위해
    //sockets 배열 순회
    sockets.forEach((el) => {
      el.send(`${message}`);
    });
    // socket.send("하나의 클라이언트에게 메시지");
  });

  socket.on("error", () => {
    console.log("에러가 났어요", err);
  });
  socket.on("close", () => {
    console.log(`클라이언트(${clientId})와 연결이 종료되었어요`);
  });
});

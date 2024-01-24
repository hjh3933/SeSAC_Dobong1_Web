const http = require("http"); //기본제공모듈
const fs = require("fs");

const PORT = 8080;
const server = http.createServer(function (request, response) {
  // console.log(request);
  //   const data = fs.readFileSync("./inex.html");
  //   response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  // response.writehead(상태코드, 헤더정보)
  // - text/html: 응답의 콘텐츠 형식이 html입니다
  // - 인코딩방식이 utf-8

  //   response.write(data); //end를 안쓰면 계속 로딩중
  //   response.end();
  // response.write('응답완료!');
  // response.end('<h3>진짜 완료!!</h3>')

  /*
  예외처리 try~catch(err)문
  try스코프 내부 문장에서 오류가 났을 때 catch문으로 err를 보냄
  */
  try {
    const data = fs.readFileSync("./index.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    // response.writehead(상태코드, 헤더정보)
    // - text/html: 응답의 콘텐츠 형식이 html입니다
    // - 인코딩방식이 utf-8

    response.write(data); //end를 안쓰면 계속 로딩중
    response.end();
  } catch (error) {
    console.log(error);
    //404페이지를 로드해서 띄움
    const data = fs.readFileSync("./404.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.write(data); //end를 안쓰면 계속 로딩중
    response.end();
  } finally {
    //성공, 실패 여부와 관계없이 무조건 실행되는 코드
    console.log("성공 실패 모두 실행됩니다");
  }
});

//1. server request event: 클라이언트가 요청할 때
server.on("request", function (req, res) {
  console.log("request 이벤트 실행!");
  //새로고침해도 계속 발생
});
//2. server connection event: 클라이언트가 접속했을 때
server.on("connection", function (req, res) {
  console.log("connection 이벤트 실행!");
  //처음 접속할때만 발생
});

//!!!! ctrl + c 눌러서 서버 실행 terminal 나갈 수 있음(서버 껐다가 키기)
//변경 사항이 있으면 반드시 서버 종료 후 재실행(server변경사항시)
server.listen(PORT, function () {
  console.log("server is open");
  console.log(`http://localhost:${PORT}`);
});

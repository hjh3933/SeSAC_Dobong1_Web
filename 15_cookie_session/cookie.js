const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

//cookie middlewares
// ver1. 암호화되지 않은 쿠키
// app.use(cookieParser());

// ver2. 암호화된 쿠키
app.use(cookieParser("secretKey")); //env에서 관리하면됨, 이름은 마음대로 설정가능

const cookieConfig = {
  /*
    - maxAge: 쿠키의 수명, 1000이 1초인 밀리초 단위
    - expires: 만료날짜, GMT 시간 설정
    - httpOnly: http통신만 접근 허용 (true, false)
    - path: '/abc', //쿠키가 해당 경로와 그 하위 경로에서만 활성화
        (default: '/')
    - secure: https 로 통신하는 경우에만 쿠키 전송(보안) (true, false)
    - signed: 쿠키의 암호화 (true, false)
    */
  maxAge: 60 * 1000,
  httpOnly: true,
  signed: true,
};

app.get("/", (req, res) => {
  res.render("cookie");
});

// 쿠키 설정
// res.cookie(쿠키이름, 쿠키값, 옵션(객체형태로 들어가야함))
app.get("/setCookie", (req, res) => {
  res.cookie("myCookie", "cookie~~", cookieConfig);
  res.send("set cookie 완료");
});

// 쿠키 가져오기
// req.cookies >> 쿠키 정보 담겨있음
app.get("/getCookie", (req, res) => {
  //   console.log(req.cookies); // ver1. 암호화되지 않은 쿠키일때
  //   res.send(req.cookies);
  console.log(req.signedCookies); // ver2. 암호화된 쿠키일때
  res.send(req.signedCookies);
  //쿠키 이름은 나오고, 값이 암호화되어 나온다
});

// 쿠키 삭제
// res.clearCookie(쿠키이름, 쿠키값, 옵션)
app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "cookie~~", cookieConfig);
  //res.cookie로 설정했던 인자와 똑같이 써준다(그래야 삭제가능)
  res.send("쿠키 삭제");
});

// path설정 후 쿠키 확인
const cookieConfig2 = {
  maxAge: 60 * 1000,
  httpOnly: true,
  path: "/abc",
};
app.get("/abc", (req, res) => {
  res.cookie("abc", "another cookie", cookieConfig2);
  res.render("abc");
});

//-------------------------------------------------------------------------------
app.get("*", (req, res) => {
  res.send("404ERROR");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/*
ver 1. 암호화 하지 않았을 때
- 미들웨어 설정 >> app.use(cookieParser())
- 쿠키 설정 >> res.cookie(이름, 값, 옵션(배열))
- 쿠키 확인 >> req.cookies 객체에서 확인
- 쿠키 삭제 >> res.clearCookie(이름, 값, 옵션)
    - 쿠키 삭제만 하는 것이고 응답 완료까진 하지 않음
    - 이름, 값, 옵션이 일치해야 삭제함
        (expires, maxAge 옵션은 일치하지 않아도 됨)

ver 2. 암호화 된 쿠키일 때
- 미들웨어 설정 >> app.use(cookieParser('특정 문자열'))
    - 임의의 문자열은 개발자가 정하는 것
- 쿠키 설정 >> res.cookie로 설정 & signed: true 옵션으로 설정
- 쿠키 확인 >> req.signedCookies 객체에서 확인
- 쿠키 삭제 >> ver1. 과 동일
*/

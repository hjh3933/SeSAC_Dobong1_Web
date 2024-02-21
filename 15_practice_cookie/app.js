const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: cookie parser 미들웨어 등록
app.use(cookieParser("secret"));

//cookie 옵션 설정 24시간 유지
const cookieOption = {
  maxAge: 1000 * 60 * 60 * 24,
  httpOnly: true,
  signed: true,
};

app.get("/", (req, res) => {
  //TODO: index.ejs 두번째 인자로 popup key에 쿠키값 보내기
  //res.render("index",{popup: 쿠키값보내기});
  console.log(req.signedCookies);
  //req.signedCookies로 보내면 오류남
  res.render("index", { popup: req.signedCookies.popup });
});

app.post("/setCookie", (req, res) => {
  //TODO: 쿠키 생성
  //쿠키이름 popup, 값 hide
  res.cookie("popup", "hide", cookieOption);
  res.send("쿠키설정성공!");
});

//-------------------------------------------------------------------------------
app.get("*", (req, res) => {
  res.send("404ERROR");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/*
req객체
 - req.cookies: 쿠키 정보 담겨있음
 - req.signedCookies: 암호화된 쿠키 정보 담겨있음

 - res객체
 - res.cookie(키, 값, 옵션) 쿠키 설정
 - res.clearCookie(키, 값, 옵션) 쿠키 제거
*/

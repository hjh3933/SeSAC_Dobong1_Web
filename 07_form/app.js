const express = require("express");
const app = express();
const PORT = 8080;

//ejs설정
app.set("view engine", "ejs");
app.set("views", "./views");
//req.body를 쓰기 위한 중간설정 body-parser미들웨어등록
app.use(express.urlencoded({ extended: true })); //true, false둘다 된다. 그냥 어떤 모듈을 쓸거냐 정도의차이?
app.use(express.json()); //json형식으로 데이터를 주고받음

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/getForm", function (req, res) {
  console.log(req.query);
  // res.send("데이터 잘받았습니다.");
  res.render("result", {
    title: "GET",
    //form으로 받은 정보쿼리를 result.ejs에 객체로 정보보낸다
    userInfo: req.query, //{id, email, pw}
  });
  //res.render(view, 보내줄데이터)
});
app.post("/postForm", function (req, res) {
  //get요청은 query로 post요청은 body로 들어온다!!!(매우중요)
  console.log(req.body);
  // res.send("post요청 성공!!");
  console.log("안녕하세요");
  res.render("result", {
    title: "POST",
    //form으로 받은 정보쿼리를 result.ejs에 객체로 정보보낸다
    userInfo: req.body, //{id, pw, agree[]}
  });
});

//Prac1 열기
app.get("/prac1", function (req, res) {
  res.render("practice/practice1.ejs");
});

//form보내면 result페이지로 보내고, 정보도 보내기
app.get("/getPrac", function (req, res) {
  console.log(req.query);
  res.render("practice/result.ejs", {
    title: "GET",
    result: req.query, //name, gender, year, month, day, hobby
  });
});

//prac2열기
app.get("/prac2", function (req, res) {
  res.render("practice/practice2.ejs");
});
//get, post메소드가 다르다면 action은 같아도 상관없다
//post로 form보내기
app.post("/postPrac", function (req, res) {
  console.log(req.body);
  res.render("practice/result.ejs", {
    title: "POST",
    result: req.body, //name, gender, year, month, day, hobby, color, number, longtxt
  });
});
app.post("/js-form-check", (req, res) => {
  console.log(req.body);
  res.send("validation응답");
});
//서버오픈
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

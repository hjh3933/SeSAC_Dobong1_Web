const express = require("express");
const app = express();
const PORT = 8080;
//multer
// const multer = require("multer"); 설치를 안했음 아직
// const path = require("path");

//미들웨어설정 view
app.set("view engine", "ejs");
app.set("views", "./views");
//미들웨어설정 bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//미들웨어설정 static(이번에는 생략한다고 함)

//route설정
// const indexRouter = require("./routes/index");
const indexRouter = require("./routes"); //이름이 index.js인 파일은 생략 가능하다
//localhost:8080/경로를 기본으로 하는 경로는
//indexRouter에서 처리한다
app.use("/", indexRouter);

//localhost:8080/user 경로를 기본으로 하는 경로는
//userRouter에서 처리한다
const userRouter = require("./routes/user");
app.use("/user", userRouter);

//404 라우팅 맨 밑에
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

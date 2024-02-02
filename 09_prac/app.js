const express = require("express");
const app = express();
const PORT = 8080;
const multer = require("multer");
const path = require("path");

//view
app.set("view engine", "ejs");
app.set("views", "./views");

//미들웨어
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//static설정 - css
app.use("/static", express.static(__dirname + "/public"));
//static설정 - img
app.use("/uploads", express.static(__dirname + "/uploads")); //destination으로 만들게요!

// const upload = multer({
//   //파일이 저장될 경로(장소)를 지정하는 속성!(폴더가 새로 생성됩니다)
//   dest: "uploads/",
// });

//업로드 세부설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      //어디에 파일 저장시킬지 설정 첫번째 인자는 null, 두번째는 경로
      //폴더 자동생성안되서 따로 만들어줘야한다
      done(null, "uploads/");
    },
    filename: (req, file, done) => {
      //확장자 추출
      const extension = path.extname(file.originalname);
      //첫번째 인자는 null, 두번째는 원하는 이름
      done(
        null,
        //파일 이름(확장자X) + 확장자 + 시간으로 저장
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

//라우팅
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/loginWithFile", uploadDetail.single("img"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  //콘솔창으로 데이터 형태 확인해보고 ejs로 어떻게 데이터 보낼지 설정할 수 있다.
  res.render("result", {
    profile: req.file.path, //path 데이터만 필요하기 때문에 따로 보낸다
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

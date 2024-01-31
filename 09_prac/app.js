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
    destination: (req, file, cd) => {
      cd(null, "uploads/");
    },
    filename: (req, file, done) => {
      const extension = path.extname(file.originalname);
      done(
        null,
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
  res.render("result", {
    profile: req.file,
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

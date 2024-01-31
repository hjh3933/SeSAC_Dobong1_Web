const { name } = require("ejs");
const express = require("express");
const app = express();
const PORT = 8080;
//npm install multer 하고 모듈 불러오기
const multer = require("multer");
const path = require("path");

//view 설정
app.set("view engine", "ejs");
app.set("views", "./views");

//bodyparser설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//static폴더 설정 - 어떤 경로의 폴더를 어떤 이름으로 사용할지 설정
//여러개 등록할 수 있어요
//__dirname: 현재폴더 경로
//현재폴더 경로에서 /uploads에있습니다
//app.use('/이 이름으로 사용할 거에요', express.static(실제폴더경로))
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/public"));
// console.log("현재 위치한 폴더의 경로", __dirname); //~~~09 multer까지 나옴 /uploads를 적어서 위치 알려준거임!

// const upload = multer({
//   //파일이 저장될 경로(장소)를 지정하는 속성!(폴더가 새로 생성됩니다)
//   dest: "uploads/",
// });
//upload 대신 이걸 적으면됩니당
const uploadDetail = multer({
  storage: multer.diskStorage({
    //request, file정보, callback함수 순으로 세가지 인자가 들어간다
    //destination(인자) {} 이런 표현도 가능
    destination: function (req, file, cd) {
      cd(null, "uploads/");
    },
    filename: function (req, file, done) {
      //확장자를 가져오는 path.extname설정(require필요)
      const extension = path.extname(file.originalname); //밑에서 확인한 req.file의 originalname에서 확장자를 추출해요!
      done(
        null,
        //basename(file.originalname, extension) extension을 제외한 (jpg앞의 이름만 가져온다)
        path.basename(file.originalname, extension) + Date.now() + extension
      ); //이름 중복될 경우가 있어서 임의의 밀리초 숫자를 추가로 붙여준다
    },
  }),
  //파일크기 제한 5기가바이트로 설정(참고만)
  limits: { fileSize: 5 * 1024 * 1024 },
});
/*
multer 디테일 설정
- strage: 저장공간에 대한 정보
    diskStorage: 파일을 저장하기 위한 모든 제어기능 제공
    - destination: 저장경로
    - filename: 파일이름 관련 정보
- limits: 파일제한 관련 정보
    fileSize: 파일사이즈를 바이트 단위로 제한
*/

//index라우팅
app.get("/", (req, res) => {
  res.render("index");
});
//single은 두번째 인자로 설정, input의 name을 받는다(하나의 파일 업로드)
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file); //파일 가져옴
  console.log(req.body); //title만 가져옴
  /*
  {
  fieldname: 'userfile', //form에 정의한 name값
  originalname: 'dog.jpg', //원본 파일명
  encoding: '7bit', //file encoding type
  mimetype: 'image/jpeg', //파일타입
  destination: 'uploads/', //파일저장 경로
  filename: '0c71d5dfd9f9dedfda9c2dd83bd27bda', //저장된 파일 이름(무작위 이름)
  path: 'uploads\\0c71d5dfd9f9dedfda9c2dd83bd27bda', //경로포함된 파일 이름
  size: 99267 //byte기준 파일 크기
}
  */
  res.send("파일업로드 완료");
});
//single -> array로 file -> files로, name다르면 (name)변경
app.post("/uploads/array", uploadDetail.array("multifiles"), (req, res) => {
  console.log(req.files); ////배열[]안에 여러 파일이 객체{}로 날아온다 [{}, {}, {}] 한개만 보내도 배열로옴
  console.log(req.body); //파일 외의 정보
  res.send("파일업로드 완료");
});
app.post(
  "/uploads/fields",
  //name은 배열안에 작성합니다
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  (req, res) => {
    console.log(req.files);
    //{file1: [{}], file2: [{}] } 이렇게 온다
    console.log(req.body);
    res.send("파일업로드 완료");
  }
);
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  //   res.send({ ...req.file, ...req.body });
  res.send({
    title: req.body,
    fileInfo: req.file,
  });
});

//서버 오픈
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

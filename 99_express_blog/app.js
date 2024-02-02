const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const exp = require("constants");
const PORT = 8080;

//임시 데이터 배열 형태로 만들어서 화면에 띄워주는 작업을 하겠다(아직 db를 안배움)
let tempDB = [
  {
    contentID: 1,
    title: "글제목1",
    content: "안녕하세요!",
    img: null, // null or path(string)
  },
  {
    contentID: 2,
    title: "글제목2",
    content: "복습해보아요",
    img: null, // null or path(string)
  },
  {
    contentID: 3,
    title: "글제목3",
    content: "아이 재밌다",
    img: null, // null or path(string)
  },
  {
    contentID: 4,
    title: "글제목4",
    content: "점심 먹으러 갈 사람?",
    img: null, // null or path(string)
  },
];

const userId = "Juhee";

//미들웨어 설정
/*
    미들웨어란?
    요청(request)과 응답(response) 사이에서 중간다리 역할을 하는 소프트웨어입니다
    ex1) req.body를 서버에서 읽을 수 있도록 도와주는 body-parser
    ex2) req.file에서 보내는 file정보를 확인할 수 있도록 도와주는 multer
    ex3) static file설정을 도와주는 app.use(express.static(~~))
*/

//미들웨어1. views설정 set이용
/*
    - view란? 
     사람들 눈에 보이는 화면, 프론트 단 html폴더 설정
     view설정
     1. html파일들을 어디서 모아둘건지(views폴더 설정)
     2. html을 보여주기 위해서 어떻게 할건지 (view engine)
    - view engine(ejs)
     서버에서 보낸 js변수를 클라이언트에서 사용할 수 있도록 도움
     pug, ejs, nunjucks, ... 등이 있지만 html과 가장 유사한 것은 ejs
*/
app.set("view engine", "ejs");
app.set("views", "./views");

/*
    미들웨어2. static폴더 설정
    - static폴더란?
     외부(브라우저)에서 접근 가능한 폴더
     프론트 js, css, img, video etc
*/
app.use("/static", express.static(__dirname + "/public")); //인자를 두 개쓰면 가상경로
app.use("/uploads", express.static(__dirname + "/uploads")); //인자를 두 개쓰면 가상경로
// app.use(express.static("/uploads")); //하나만 쓰면 그냥 이 이름 그대로 접근하겠다는 뜻
//이미지가 안보여서 그냥 가상경로 설정함
/*
    미들웨어3. bodyparser설정(express내장 모듈)
    - req.body 기본적으로 undefined
    - bodyparser가 req.body를 서버측에서 사용할 수 있도록 파싱해줌
*/
//true = queryString 모듈 사용, false = qs모듈 사용 비슷한데 qs모듈이 보안성능이 좀 더 추가되어 있다고 함
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //요청 body에서 내가 필요한 객체 정보만 추출할 수 있도록 도와주는 녀석

/*
    미들웨어4. multer 설정(npm install multer, 설치필요)
    - req.body input type= "file"의 정보는 string으로 온다
    - 실제 파일 업로드가 가능하도록 파일 업로드, 파일 정보 확인을 위해 사용
    - dest: 경로 해당 폴더 자동 생성, destination(미리 생성 필요)
*/
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, "uploads/");
    },
    filename: (req, file, done) => {
      /*
        extname(파일명): 확장자 추출
        basename(파일명, 확장자): 확장자를 제외한 파일명 추출
        basename(경로명): (확장자 포함된)파일명 추출
    */
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
/*
    특정 url로 특정 method에 대한 요청 처리
    -url: 사용자가 정한 url
    - method: get, post, put, patch, delete
     CRUD를 위한 것(crud: 데이터를 create, read, update, delete)
     1. get: 'R'ead
     브라우저의 url에 주소를 입력하는 것은 모두 get요청
     localhost:8080/sesac의 화면을 보기 위해서는 /sesac의 get요청에 대한 응답이 있어야한다
     res.send, res.end, res.write, res.render
     2. post 'C'reate 새로운 정보를 입력, 추가할 때 
     3. put, patch: 'U'pdate
        수정관련 메소드
     4. delete: 삭제 
*/
app.get("/", (req, res) => {
  res.render("index", {
    user: userId,
    contentData: tempDB,
  });
});
//파라미터 배워보기 :변수
/*
    params vs query
    - params(새로 배운거)
        - 서버에서 url을 표기 /:params
        - 클라이언트에서 요청시 /123
        - req.params에서 정보 확인 가능 {params: '123'} 문자열로 들어옴
        - 네이버 블로그 처럼 여러 계정의 글을 '조회'할 때 주로 사용
    - query(이미 배운거)
        - 서버에서 url 표기 /sesac
        - 클라이언트에서 url표기 /sesac?id=123&content=123
        - req.query 에서 정보 확인 가능{id: '123', content: '123'}
        - 검색, 필터링 기능에 주로 사용
*/

//id 5이상 or 다른 문자로 접근 시 404render 필요, 지금은 params가 다 받아주는 중
app.get("/content/:contentID", (req, res) => {
  console.log(req.params);
  //{ contentID: '3' } 객체 출력
  //req.params.contentID
  const { contentID } = req.params; //객체분할할당해야함 안그러면 객체형태로 변수에 저장되어 버려서
  //실제 tempDB의 값과 params로 들어온 값을 비교하는 것임

  const isContent = tempDB.filter(
    (obj) => obj.contentID === Number(contentID)
  )[0];
  console.log(isContent); // {}, undefined

  if (isContent) {
    res.render("content", isContent);
  } else {
    //undefined면 else가 실행된다
    res.render("404");
  }
});

//새글 작성하기 화면 렌더링
//  /content/write 는 write를 params로 파악할 수 있음
app.get("/write", (req, res) => {
  res.render("writeContent");
});

app.post("/blog/post", upload.single("img"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  tempDB.push({
    //제일 끝에 있는 걸 찾아서 +1 을 해주는 식으로 ID추가(텅 비어있으면 1추가)
    contentID: tempDB.length != 0 ? tempDB[tempDB.length - 1].contentID + 1 : 1,
    title: req.body.title,
    content: req.body.content,
    img: req.file ? req.file.path : null, //삼항 연산자 사용해서 undefined이면 null값을 넣는다
  });
  res.redirect("/");
});

app.delete("/blog/delete", (req, res) => {
  console.log(req.query); //아마 ID가 들어왔을듯? ㅇㅇ
  //if문으로 삭제하면될것같음
  const { contentID } = req.query; //객체구조분해할당
  //filter() 조건에 맞는 애들만 모아서 배열로 반환
  tempDB = tempDB.filter((obj) => obj.contentID !== Number(contentID)); //삭제로 온 id값이 아닌 애들만 반환
  console.log(tempDB);
  res.end();
});

//라우팅 가장 맨 밑에 작성, 이상한 url로 접근시 404
app.get("*", (req, res) => {
  res.render("404");
});

//listen으로 port열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

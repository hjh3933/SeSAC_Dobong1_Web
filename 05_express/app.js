const express = require("express");
const app = express(); //서버 생성
const PORT = 8080;

//ejs를 쓰기 위한 미들웨어 설정
app.set("view engine", "ejs"); //viewengine을 ejs로 쓰겠다고 선언
app.set("views", "./views"); //('정해져있음', '내 뷰 있는 폴더명') 여기 view파일이 있다고 알려줌
//사진, css 등의 static한 요소 가져오기
app.use("/static", express.static(__dirname + "/public")); ///public에 있는 애들을 /static으로 쓸거야

//get요청 시(라우팅)
//localhost:8080 다음 /로 접근시 로드되는 페이지 설정
app.get("/", (request, response) => {
  //send() = http의 write랑 end가 합쳐짐(send랑 render는 절대 같이 하면안된다고 한다)
  //한글도 헤더설정 없이도 깨지지 않고 잘나온다
  //   response.send("hello express!! 안녕하세요 익스프레스");
  //이 페이지를 보여주세요 명령 render()
  response.render("index.ejs", {
    //render의 두번째 인자로 객체를 넣을 수 있습니다.
    //index.ejs에서 사용할 정보를 전달합니다
    btns: ["apple", "banana"],
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "식사는 맛있게 하셨나요?",
    },
  });
});
//라우팅(.ejs 생략가능) 위에것도 라우팅임
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/login", (req, res) => {
  res.render("login");
});
//라우팅 하는 것 중에 제일 마지막에 적어서 페이지 못찾으면 404페이지 오도록 설정함
app.get("*", (req, res) => {
  res.render("404");
});

//port번호로 열고 열었다고 알려주기
app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});

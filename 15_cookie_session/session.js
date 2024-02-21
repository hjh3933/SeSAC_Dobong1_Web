const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// 세션 미들웨어 설정
const sessionConfig = {
  /*
    - secret: 안전한 쿠키 전송을 위한 서명값(필수 작성)
    - resave: 세션 수정사항이 생기지 않더라도 매 요청마다 세션을 다시 저장할지(false 권장)
    - saveUninitialized: 세션에 저장할 내용이 없더라도 처음부터 세션을 생성할지(false 권장)
    - cookie: 세션 쿠키에 대한 설정(cookie.js참고 {maxAge, ...})
    - secure: https에 대한 세션을 주고 받을지 (true or false)
    - name: 세션 쿠키의 이름(default = connect.sid)
    */
  secret: "secretKey", //필수, 나만의 문자열
  resave: false,
  saveUninitialized: false,
  cookie: {
    // maxAge: 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionConfig)); //배열을 받는다

app.get("/", (req, res) => {
  res.render("session");
});

// 세션 설정하기
app.get("/set", (req, res) => {
  //   req.session.키이름 = "값";
  req.session.name = "Juhee";
  res.send("세션 설정완료!!");
});
// 세션 확인하기
app.get("/name", (req, res) => {
  console.log(req.sessionID);
  //mOSFrNtMWF145RNjHbyX-Qec0VO5KMvl

  // 세션 정보확인
  console.log(req.session);
  /*
  Session {
  cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
  name: 'Juhee'
    }
  */
  console.log(req.session.name); //Juhee 출력
  res.json({ id: req.sessionID, name: req.session.name });
});
// 세션 삭제하기
//req.session.destroy() 이용
app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("server err");
      throw err;
    }

    // res.send("세션 삭제 완료");
    res.redirect("/name");
    //id 값만 뜬다, name은 삭제된 상태
  });
});

//-------------------------------------------------------------------------------
app.get("*", (req, res) => {
  res.send("404ERROR");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

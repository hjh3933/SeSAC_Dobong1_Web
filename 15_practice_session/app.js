const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userinfo = { userid: "cocoa", userpw: "1234" };

//세션설정
const sessionConfig = {
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 10,
  },
};
app.use(session(sessionConfig));

//index에 세션정보전달
app.get("/", (req, res) => {
  const user = req.session.user; //cocoa
  if (user) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
});
//로그인된 유저라면 {isLogin: true, user: user}
//로그인 안된 유저라면 {isLogin: false}
// TODO user session불러오는 부분
// user가 로그인되었는지 안되었는지 확인하는 부분

app.get("/login", (req, res) => {
  res.render("login");
});

// TODO로그인 기능
app.post("/login", (req, res) => {
  //로그인진행
  if (req.body.id === userinfo.userid && req.body.pw === userinfo.userpw) {
    req.session.user = req.body.id;
    console.log(req.session);
    console.log(req.sessionID);
    res.redirect("/");
  } else {
    res.send(`
        <script>
            alert('아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요');
            document.location.href = '/login';
        </script>
    `);
  }
});
// TODO로그아웃기능
app.get("/logout", (req, res) => {
  //로그아웃진행 세션삭제
  //redirect메인페이지
  const user = req.session.user;

  if (user) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send("server err");
        throw err;
      }
      res.redirect("/"); //로그아웃 종료 후 폼으로
    });
  } else {
    //세션 만료된 회원
    res.send(`
        <script>
            alert('이미 세션이 만료되었습니다');
            document.location.href = '/';
        </script>
    `);
  }
});
//-------------------------------------------------------------------------------
app.get("*", (req, res) => {
  res.send("404 ERROR");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

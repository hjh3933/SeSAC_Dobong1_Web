const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8080;
const SECRET = "DWB0jOga2jrAozUXUsLCQ1e4EeeQH8"; //랜덤문자열 사용

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userInfo = { id: "cocoa", pw: "1234", name: "cocoa", age: 10 };

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
// login POST
app.post("/login", (req, res) => {
  try {
    console.log(req.body);

    const { id, pw } = req.body;
    const { id: realid, pw: realpw } = userInfo;
    if (id === realid && pw === realpw) {
      // jwt 인증 토큰 생성
      // const token = jwt.sign(payload, secret/private key, option)
      const token = jwt.sign({ id }, SECRET);
      console.log(token);
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNvY29hIiwiaWF0IjoxNzA4NTAxNTU0fQ.s2asjHDJDblsmD_yPoGagfNubnB3a-GVB4C9g_I-izA
      res.send({ result: true, token }); //key value가 같다면 하나만 적어도 된다
    } else {
      res.send({ result: false, message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (err) {
    console.log("POST /login", err);
    res.status(500).send("server error");
  }
});
app.post("/token", (req, res) => {
  //token 유효성검증
  try {
    console.log(req.headers.authorization);
    if (req.headers.authorization) {
      //인증정보 들어왔을 때
      const token = req.headers.authorization.split(" ")[1];
      //Bearer와 뒤의 토큰을 분리(띄어쓰기 기준), [0] = Bearer, [1] = 토큰만 저장
      //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNvY29hIiwiaWF0IjoxNzA4NjU1NjQzfQ.uEbbTtysQn6YV5EtNPsQHpxXdq5HocoMed0JRDNiG6U
      try {
        console.log("token >> ", token);
        const auth = jwt.verify(token, SECRET);
        console.log("auth >> ", auth); // varify의 리턴값 : { id: 'cocoa', iat: 1708656030 }
        // payload와 iat온다
        //iat: issued at, 발급된 시간을 의미한다

        // db의 id = token의 id값 비교
        if (userInfo.id === auth.id) {
          //db의 name값 전송
          res.send({ result: true, name: userInfo.name });
        }
      } catch (e) {
        // 잘못된 정보 들어왔을 때
        console.log("토큰 인증 에러 >> ", e);
        res.send({ result: false, message: "인증된 회원이 아닙니다." });
      }
    } else {
      //인증 정보 없을 때
      res.redirect("/login");
    }
  } catch (err) {
    console.log("POST /token", err);
    res.status(500).send("server error");
  }
});

//-------------------------------------------------------------------------------
app.get("*", (req, res) => {
  res.send("404 ERROR");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

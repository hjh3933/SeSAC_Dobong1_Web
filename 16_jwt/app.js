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
  //token 정보확인
});

//-------------------------------------------------------------------------------
app.get("*", (req, res) => {
  res.send("404 ERROR");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

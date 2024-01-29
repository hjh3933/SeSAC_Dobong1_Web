const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
//bodyparser설정 이 두줄이 있어야 body데이터 사용가능
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});
//ajax라우팅
app.get("/ajax", function (req, res) {
  console.log(req.query);
  //   res.send("ajax 응답완료");
  //   res.send({
  //     name: req.query.name,
  //     gender: req.query.gender,
  //   });
  res.send(req.query);
});
app.post("/ajax", (req, res) => {
  console.log(req.boby);
  res.send(req.body);
});

//axios
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//fetch
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/openApi", (req, res) => {
  res.render("api");
});

//실습1
app.get("/axiosGet", (req, res) => {
  res.render("axiosGet");
});
app.get("/axiosGetPrac", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
//실습2
let id = "wngml";
let pw = 1234;
let result;
app.get("/axiosPost", (req, res) => {
  res.render("axiosPost");
});
app.post("/axiosPostPrac", (req, res) => {
  console.log(req.body);
  if (req.body.id == id && req.body.pw == pw) {
    result = true;
  } else {
    result = false;
  }
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

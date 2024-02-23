const express = require("express");
const session = require("express-session");
const app = express();
const db = require("./models");
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static(__dirname + "./static"));

//session 설정
const sessionConfig = {
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 10,
  },
};
app.use(session(sessionConfig));

//routes설정
const indexRouter = require("./routes");
app.use("/", indexRouter);

//db설정
db.sequelize.sync({ force: false }).then((result) => {
  console.log("db연결 성공");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log(`http://118.67.133.199:${PORT}`);
});

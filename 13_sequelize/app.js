const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ./routes/index가 생략(index만!!생략가능)
const indexRouter = require("./routes");
app.use("/", indexRouter);
const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.get("*", (req, res) => {
  res.render("404");
});

//db sync()
db.sequelize.sync({ force: false }).then((result) => {
  // console.log(result);
  console.log("db연결 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

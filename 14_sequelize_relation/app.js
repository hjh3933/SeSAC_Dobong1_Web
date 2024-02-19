const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes");
app.use("/", router);

db.sequelize.sync().then((result) => {
  // console.log(result);
  console.log("db연결성공");
});

app.get("*", (req, res) => {
  res.send("404오류");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

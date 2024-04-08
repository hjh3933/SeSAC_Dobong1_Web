const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config();
const PORT = process.env.PORT;

const userModel = require("./models/User");

// config 설정
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);
const User = userModel(sequelize);
// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api 만들기
// GET /api > "안녕하세요" send
app.get("/api", async (req, res) => {
  res.send("안녕하세요");
});
// POST /api/users > user 하나 추가
app.post("/api/users", async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({
      username,
      email,
    });
    console.log(user); //{}
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send({ msg: "서버오류" });
  }
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("테이블 생성 완료");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("sync err!!!");
    console.log(err);
  });

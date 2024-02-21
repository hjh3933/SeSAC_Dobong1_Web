// env사용하려면 json말고 js파일이 필요하다
require("dotenv").config();

// env는 process로 접근할 수 있다
const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "sesac",
  host: "127.0.0.1",
  dialect: "mysql",
};

module.exports = { development };

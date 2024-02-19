"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

console.log("config >> ", config);

// const sequelize = new Sequelize(db명, 사용자명, 비밀번호, config 정보전체)
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = sequelize; //db = {sequelize:sequelize}
db.Sequelize = Sequelize; //db = {sequelize:sequelize, Sequelize:Sequelize}

//seq = 위에서 Seque클래스를 config로 설정한 db관련객체
//Seq = 설치한 seq모듈(건드린것 X)
db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);
module.exports = db;
//db라는 변수를 내보내기 하는 중

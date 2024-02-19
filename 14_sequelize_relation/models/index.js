"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

//(1) sequelize클래스를 이용해서 instance 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//(2) 모델 불러오기, seq인스턴스와 seq모듈 전달(매개변수)
const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

//(3) 모델 간 관계 설정(외래키)
//hasOne, hasMany, belongsTo, belongsMany
// 3- 1) 1:1관계설정, Player:Profile
PlayerModel.hasOne(ProfileModel, {
  foreignKey: "player_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
ProfileModel.belongsTo(PlayerModel, {
  foreignKey: "player_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
// 3- 2) 1:N관계설정, Team:Player
TeamModel.hasMany(PlayerModel, {
  //외래키 이름을 다르게 적을 경우 자동으로 기본키를 외래키로 가져간다
  //그래도 sourceKey명시해야한다?
  sourceKey: "team_id",
  foreignKey: "teamid",
});
PlayerModel.belongsTo(TeamModel, {
  target: "team_id",
  foreignKey: "teamid",
});
// 3 - 3) M:N관계설정, Game:Team
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id",
});
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id",
});

//(4) db객체에 모델추가
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
db.Game = GameModel;
db.TeamGame = TeamGameModel;

module.exports = db;

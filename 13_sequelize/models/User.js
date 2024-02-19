//sequelize로 만들기
const User = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    // 1. model name
    "User",
    // 2. column set
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    // 3. table option
    {
      tableName: "user",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return model;
};

module.exports = User;

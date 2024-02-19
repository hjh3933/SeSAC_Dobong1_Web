const TeamGameModel = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "TeamGame",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return model;
};

module.exports = TeamGameModel;

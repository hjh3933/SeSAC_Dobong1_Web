const TeamModel = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "Team",
    {
      team_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return model;
};

module.exports = TeamModel;

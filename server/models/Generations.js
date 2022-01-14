const { INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Generations = sequelize.define(
    "Generations",
    {
      models_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
      },
      max_clutch: INTEGER,
      max_brakes: INTEGER,
      production_started: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      production_ended: INTEGER,
      engines: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Generations;
};

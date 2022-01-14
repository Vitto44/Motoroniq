const { INTEGER, STRING } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Engines = sequelize.define(
    "Engines",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cylinders: INTEGER,
      base_power: INTEGER,
      base_torque: STRING(100),
      fuel_type: STRING(20),
      forced_induction: STRING(45),
      picture: STRING,
    },
    {
      timestamps: false,
    }
  );

  return Engines;
};

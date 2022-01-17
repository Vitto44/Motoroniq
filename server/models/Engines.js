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
      type_of_forcing: STRING(45),
      picture: STRING,
      brakes: INTEGER,
      exhaust: INTEGER,
      differential: INTEGER,
      fuel_pump: INTEGER,
      injectors: INTEGER,
      intake_manifold: INTEGER,
      forced_induction: INTEGER,
      head: INTEGER,
      air_filter: INTEGER,
      clutch: INTEGER,
    },
    {
      timestamps: false,
    }
  );

  return Engines;
};

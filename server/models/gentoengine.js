const { INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const gentoengine = sequelize.define(
    "gentoengine",
    {
      engines_id: INTEGER,
      generations_id: INTEGER,
    },
    {
      timestamps: false,
    }
  );

  return gentoengine;
};

const { INTEGER, STRING } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Parts = sequelize.define(
    "Parts",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      partName: STRING,
      threshold: INTEGER,
    },
    {
      timestamps: false,
    }
  );

  return Parts;
};

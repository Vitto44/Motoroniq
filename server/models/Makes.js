module.exports = (sequelize, DataTypes) => {
  const Makes = sequelize.define(
    "Makes",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Makes;
};

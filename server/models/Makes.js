module.exports = (sequelize, DataTypes) => {
  const Makes = sequelize.define(
    "Makes",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Makes;
};

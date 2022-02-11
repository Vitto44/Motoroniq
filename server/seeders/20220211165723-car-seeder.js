"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "makes",
      [
        {
          id: 1,
          name: "Mazda",
          picture: "https://www.carlogos.org/car-logos/mazda-logo.png",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("makes", null, {});
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, __) => {
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

  down: async (queryInterface, __) => {
    await queryInterface.bulkDelete("makes", null, {});
  },
};

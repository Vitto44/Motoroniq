"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "models",
      [
        {
          id: 1,
          makes_id: 1,
          name: "MX-5",
          picture:
            "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/09/06/15362472164193.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("models", null, {});
  },
};

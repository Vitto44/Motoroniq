"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "generations",
      [
        {
          id: 1,
          models_id: 1,
          name: "NA",
          picture:
            "https://img.remediosdigitales.com/279331/mazda_mx-5_46/450_1000.jpg",
          brakes: 300,
          exhaust: 290,
          max_clutch: 320,
          max_brakes: 320,
          production_started: 1989,
          production_ended: 1997,
          engines: "1,2",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("models", null, {});
  },
};

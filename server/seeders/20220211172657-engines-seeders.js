"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "engines",
      [
        {
          id: 1,
          cylinders: 4,
          name: "1.6i DOHC (90HP)",
          picture:
            "https://cimg7.ibsrv.net/gimg/www.miataturbo.net-vbulletin/700x525/13_7__f698e96388e18dd3486bdb03f3878deadc26a8e9.jpg",
          base_power: 90,
          base_torque: "210Nm @ 1750-4600 RPM",
          fuel_type: Petrol,
          type_of_forcing: "Natural",
          brakes: 290,
          exhaust: 250,
          differential: 320,
          fuel_pump: 140,
          injectors: 140,
          intake_manifold: 200,
          forced_induction: 220,
          head: 230,
          air_filter: 190,
          clutch: 250,
        },
        {
          id: 2,
          cylinders: 4,
          name: "1.8i DOHC (116HP)",
          picture:
            "https://cimg7.ibsrv.net/gimg/www.miataturbo.net-vbulletin/700x525/13_7__f698e96388e18dd3486bdb03f3878deadc26a8e9.jpg",
          base_power: 115,
          base_torque: "240Nm @ 1750-4600 RPM",
          fuel_type: Petrol,
          type_of_forcing: "Natural",
          brakes: 320,
          exhaust: 260,
          differential: 320,
          fuel_pump: 140,
          injectors: 160,
          intake_manifold: 220,
          forced_induction: 250,
          head: 270,
          air_filter: 200,
          clutch: 250,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("engines", null, {});
  },
};

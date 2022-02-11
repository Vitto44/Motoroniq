"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "engines",
      [
        {
          name: "Turbo: HKS GT II 7460",
          image:
            "https://m.media-amazon.com/images/I/51C43Lh4vdL._AC_SL1088_.jpg",
          partName: "forced_induction",
          threshold: 420,
          partID: 1,
          price: 1239,
        },
        {
          name: "Flyin’ Miata Level 1",
          image:
            "https://m.media-amazon.com/images/I/71ta7xg1jOL._AC_SL1500_.jpg",
          partName: "clutch",
          threshold: 300,
          partID: 5,
          price: 320,
        },
        {
          name: "Turbo: Garrett GTX2860R",
          partName: "forced_induction",
          threshold: 700,
          partID: 1,
          price: 2100,
        },
        {
          name: "South Bend",
          partName: "clutch",
          threshold: 250,
          partID: 5,
          price: 290,
        },
        {
          name: "Volant Primo ProGuard 7",
          partName: "air_filter",
          threshold: 315,
          partID: 2,
          price: 25,
          image:
            "https://www.autoaccessoriesgarage.com/img/group/icon/2420.jpg",
        },
        {
          name: "Volant Primo ProGuard 7",
          partName: "air_filter",
          threshold: 315,
          partID: 2,
          price: 25,
        },
        {
          name: "K&N Air Filter",
          partName: "air_filter",
          threshold: 720,
          partID: 2,
          price: 105,
          image:
            "https://www.autoaccessoriesgarage.com/img/group/icon/2063.jpg",
        },
        {
          name: "Injen High Performance",
          partName: "air_filter",
          image:
            "https://www.autoaccessoriesgarage.com/img/group/icon/2195.jpg",
          threshold: 265,
          partID: 2,
          price: 55,
        },
        {
          name: "AEM 50-1200 E85",
          partName: "fuel_pump",
          image:
            "https://m.media-amazon.com/images/I/51Inq-ei+zL._AC_SL1000_.jpg",
          threshold: 315,
          partID: 3,
          price: 60,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("engines", null, {});
  },
};

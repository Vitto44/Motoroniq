"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "gentoengines",
      [
        {
          id: 1,
          generations_id: 1,
          engines_id: 1,
        },
        {
          id: 2,
          generations_id: 1,
          engines_id: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("gentoengines", null, {});
  },
};

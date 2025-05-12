"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("VehicleTypes", [
      {
        typeName: "Bike", // Changed from 'name' to 'typeName'
        wheels: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeName: "Car",
        wheels: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // ... add all other entries with typeName and wheels
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("VehicleTypes", null, {});
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Vehicles",
      [
        {
          modelName: "Honda Civic",
          vehicleTypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelName: "Hyundai Verna",
          vehicleTypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelName: "Hyundai Creta",
          vehicleTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelName: "Tata Nexon",
          vehicleTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelName: "Maruti Swift",
          vehicleTypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelName: "KTM Duke",
          vehicleTypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelName: "Royal Enfield Classic",
          vehicleTypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelName: "Yamaha R15",
          vehicleTypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Vehicles", null, {});
  },
};

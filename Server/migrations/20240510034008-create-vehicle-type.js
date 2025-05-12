// "use strict";
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable("Vehicles", {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       vehicleTypeId: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         references: {
//           model: "VehicleTypes", // Name of the VehicleTypes table
//           key: "id",
//         },
//         onUpdate: "CASCADE",
//         onDelete: "CASCADE",
//       },
//       model: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       year: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable("Vehicles");
//   },
// };
// "use strict";
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable("VehicleTypes", {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       typeName: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       wheels: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//     });
//   },

//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable("VehicleTypes");
//   },
// };
// "use strict";

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.bulkInsert(
//       "VehicleTypes",
//       [
//         {
//           typeName: "Bike",
//           wheels: 2,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           typeName: "Car",
//           wheels: 4,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           typeName: "Auto Rickshaw",
//           wheels: 3,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           typeName: "Truck",
//           wheels: 6,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           typeName: "Scooter",
//           wheels: 2,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//       ],
//       {}
//     );
//   },

//   async down(queryInterface, Sequelize) {
//     await queryInterface.bulkDelete("VehicleTypes", null, {});
//   },
// };
//=============================================================================
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("VehicleTypes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      typeName: {
        // This must match your model
        type: Sequelize.STRING,
        allowNull: false,
      },
      wheels: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("VehicleTypes");
  },
};

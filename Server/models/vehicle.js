"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    static associate(models) {
      // Define associations here, e.g., with VehicleType
      Vehicle.belongsTo(models.VehicleType, { foreignKey: "vehicleTypeId" });
    }
  }
  Vehicle.init(
    {
      modelName: DataTypes.STRING,
      vehicleTypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Vehicle", // Correct model name
      tableName: "Vehicles", // Explicitly define the table name
    }
  );
  return Vehicle;
};

module.exports = (sequelize, DataTypes) => {
  const VehicleType = sequelize.define(
    "VehicleType",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      typeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      wheels: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "VehicleTypes", // important to match the migration table name
      timestamps: true, // only if you have createdAt/updatedAt columns
    }
  );

  return VehicleType;
};

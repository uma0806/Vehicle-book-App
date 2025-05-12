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

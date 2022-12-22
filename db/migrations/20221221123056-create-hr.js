/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HRs', {
      id: {
        allowNull: check,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.TEXT,
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: check,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: check,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HRs');
  },
};

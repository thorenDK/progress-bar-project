/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Adaptations', {
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
      url: {
        type: Sequelize.TEXT,
      },
      progress: {
        type: Sequelize.INTEGER,
      },
      one: {
        type: Sequelize.INTEGER,
      },
      two: {
        type: Sequelize.INTEGER,
      },
      three: {
        type: Sequelize.INTEGER,
      },
      four: {
        type: Sequelize.INTEGER,
      },
      five: {
        type: Sequelize.INTEGER,
      },
      six: {
        type: Sequelize.INTEGER,
      },
      seven: {
        type: Sequelize.INTEGER,
      },
      eight: {
        type: Sequelize.INTEGER,
      },
      nine: {
        type: Sequelize.INTEGER,
      },
      ten: {
        type: Sequelize.INTEGER,
      },
      eleven: {
        type: Sequelize.INTEGER,
      },
      twelve: {
        type: Sequelize.INTEGER,
      },
      hr_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'HRs',
          },
          key: 'id',
        },
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
    await queryInterface.dropTable('Adaptations');
  },
};

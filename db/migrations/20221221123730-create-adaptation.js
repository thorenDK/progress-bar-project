/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Adaptations', {
      id: {
        allowNull: false,
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
        type: Sequelize.BOOLEAN,
      },
      two: {
        type: Sequelize.BOOLEAN,
      },
      three: {
        type: Sequelize.BOOLEAN,
      },
      four: {
        type: Sequelize.BOOLEAN,
      },
      five: {
        type: Sequelize.BOOLEAN,
      },
      six: {
        type: Sequelize.BOOLEAN,
      },
      seven: {
        type: Sequelize.BOOLEAN,
      },
      eight: {
        type: Sequelize.BOOLEAN,
      },
      nine: {
        type: Sequelize.BOOLEAN,
      },
      ten: {
        type: Sequelize.BOOLEAN,
      },
      eleven: {
        type: Sequelize.BOOLEAN,
      },
      twelve: {
        type: Sequelize.BOOLEAN,
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
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Adaptations');
  },
};

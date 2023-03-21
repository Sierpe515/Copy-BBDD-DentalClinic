'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
          key: 'id'
        }
      },
      specialty_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Specialties',
          key: 'id'
        }
      },
      image: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING
      },
      collegiate_number: {
        type: Sequelize.STRING,
        unique: true
      },
      schedule: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Employees');
  }
};
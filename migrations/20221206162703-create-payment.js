'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      betid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      optid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      addressto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      addressfrom: {
        allowNull: false,
        type: Sequelize.STRING
      },
      txid: {
        allowNull: false,
        type: Sequelize.STRING
      },
      amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(36, 18)
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
    await queryInterface.dropTable('Payments');
  }
};
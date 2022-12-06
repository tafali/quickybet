'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let id = 1;
    await queryInterface.bulkInsert('Bets', [{
      id,
      name: 'FCB - TFC',
      content: '<b>World Cup :) </b>',
      endtime: new Date("2023-03-25"),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('Options', [{
      betid: id,
      ind: 1,
      content: '<b>FCB wins</b>',
      address: 'dasdsdasdasdasdsdsadadsdasdasda',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      betid: id,
      ind: 2,
      content: '<b>Draw</b>',
      address: 'FSFDFSFSFWdasdasdsdsadadsdasdasda',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      betid: id,
      ind: 3,
      content: '<b>TFC wins</b>',
      address: '132123123sdasdasdsdsadadsdasdasda',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bets', null, {})
    await queryInterface.bulkDelete('Options', null, {})
  }
};

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

    let oid1=1;
    let oid2=2;
    let oid3=3;
    await queryInterface.bulkInsert('Options', [{
      id: oid1,
      betid: id,
      ind: 1,
      content: '<b>FCB wins</b>',
      address: 'dasdsdasdasdasdsdsadadsdasdasda',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: oid2,
      betid: id,
      ind: 2,
      content: '<b>Draw</b>',
      address: 'FSFDFSFSFWdasdasdsdsadadsdasdasda',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: oid3,
      betid: id,
      ind: 3,
      content: '<b>TFC wins</b>',
      address: '132123123sdasdasdsdsadadsdasdasda',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('Payments', [{
      betid: id,
      optid: oid1,
      address: 'dasdsdasdasdasdsdsadadsdasdasda',
      txid: '3234rdrwerwr43w4r54rw4r44w4',
      amount: 102,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      betid: id,
      optid: oid1,
      address: 'dasdsdasdasdasdsdsadadsdasdasda',
      txid: 'fdgı0d9gsd0gıs0fdgıs0fdg9ısfd0ıg',
      amount: 510,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      betid: id,
      optid: oid2,
      address: 'FSFDFSFSFWdasdasdsdsadadsdasdasda',
      txid: 'asf9*0f9sd*fsd*0fsdf0sdf9s*d',
      amount: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      betid: id,
      optid: oid2,
      address: 'FSFDFSFSFWdasdasdsdsadadsdasdasda',
      txid: 'aıfofy6d8adsfasd87fds8fas8d7f8s',
      amount: 150,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      betid: id,
      optid: oid2,
      address: 'FSFDFSFSFWdasdasdsdsadadsdasdasda',
      txid: '7f8d7f8dsfs8ad7fy7asdyf8asd7fy8asd7fy',
      amount: 250,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      betid: id,
      optid: oid3,
      address: '132123123sdasdasdsdsadadsdasdasda',
      txid: 'adsd8d9asucvnvu9sdffs98fnsd8fsnd89fs9',
      amount: 125,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bets', null, {})
    await queryInterface.bulkDelete('Options', null, {})
    await queryInterface.bulkDelete('Payments', null, {})
  }
};

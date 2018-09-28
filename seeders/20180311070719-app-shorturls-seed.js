'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('ShortUrls', [{
      id: 1,
      campaignId: 1,
      campaignUrl: 'https://google.com',
      mobile: '1231231231',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      campaignId: 1,
      campaignUrl: 'https://google.com/2',
      mobile: '2222222222',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('ShortUrls', null, {});
  }
};

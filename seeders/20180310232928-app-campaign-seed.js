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
    return queryInterface.bulkInsert('Campaigns', [{
      campaignId: 1,
      campaignName: 'test campaign',
      isActive: true,
      assignedUser: 1,
      createdOn: new Date(),
      lastModifiedOn: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
     queryInterface.bulkDelete('Trackers', null, {});
    return queryInterface.bulkDelete('Campaigns', null, {});
  }
};

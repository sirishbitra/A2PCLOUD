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
    return queryInterface.bulkInsert('Codes', [{
      id: 1,
      shortCode: 'ABCD',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      shortCode: 'ABCE',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      shortCode: 'ABCF',
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
    return queryInterface.bulkDelete('Codes', null, {});
  }
};

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserAccounts', {
      accountId: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'accountId',
        default: 0
      },
      accountName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        field: 'accountName'
      },
      isActive:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'isActive',
        default: false
      },
      apiKey: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        field: 'apiKey'
      },
      createdOn:{
        type: Sequelize.DATE, 
        allowNull: false, 
        defaultValue: Sequelize.NOW
      },
      lastModifiedOn:{
        type: Sequelize.DATE, 
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserAccounts');
  }
};
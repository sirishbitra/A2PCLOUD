'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      userId: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'userId',
        default: 0
      },
      accountId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: 'accountId',
        default: false
      },
      userEmail: {
        type: Sequelize.STRING,
        validate: {isEmail: true},
        unique: true,
        allowNull: false,
        field: 'userEmail'
      },
      isActive:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'isActive',
        default: false
      },
      password_hash: Sequelize.STRING,
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
    return queryInterface.dropTable('Users');
  }
};
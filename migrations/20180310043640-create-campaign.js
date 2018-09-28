'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Campaigns', {
      campaignId: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'campaignId',
        default: 0
      },
      campaignName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        field: 'campaignName'
      },
      isActive:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'isActive',
        default: false
      },
      assignedUser:{
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'assignedUser',
        default: false,
        references: { model: 'Users', key: 'userId' }
      },
      createdOn:{
        type: Sequelize.DATE, 
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      lastModifiedOn:{
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Campaigns');
  }
};
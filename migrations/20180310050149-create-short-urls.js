'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ShortUrls', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
        default: 0,
        references: { model: 'Codes', key: 'id' }
      },
      campaignId: {
        type: Sequelize.INTEGER(11),
        unique: false,
        allowNull: false,
        default: 0,
        field: 'campaignId',
        references: { model: 'Campaigns', key: 'campaignId' }
      },
      campaignUrl: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
        field: 'campaignUrl'
      },
      mobile: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
        field: 'mobile'
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ShortUrls');
  }
};
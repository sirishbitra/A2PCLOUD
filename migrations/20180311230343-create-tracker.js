'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trackers', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
        default: 0
      },
      campaignId: {
        type: Sequelize.INTEGER(11),
        unique: false,
        allowNull: false,
        field: 'campaignId',
        default: 0,
        references: {
            model: "Campaigns",
            key: "campaignId"
          }
      },
      shortCode: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
          field: 'shortCode',
          default: ''
      },
      ip: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
        field: 'ip',
        default: ''
      },
      browser: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
          field: 'browser',
          default: ''
      },
      browserVersion: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
          field: 'browserVersion',
          default: ''
      },
      engine: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
          field: 'engine',
          default: ''
      },
      engineVersion: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
          field: 'engineVersion',
          default: ''
      },
      os: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
          field: 'os',
          default: ''
      },
      osVersion: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
          field: 'osVersion',
          default: ''
      },
      deviceVendor: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
          field: 'deviceVendor',
          default: ''
      },
      deviceModel: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
          field: 'deviceModel',
          default: ''
      },
      deviceType: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
          field: 'deviceType',
          default: ''
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
    return queryInterface.dropTable('Trackers');
  }
};
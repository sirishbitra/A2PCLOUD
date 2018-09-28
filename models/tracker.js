'use strict';
var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Tracker = sequelize.define('Tracker', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id',
      default: 0
    },
    campaignId: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false,
      field: 'campaignId',
      references: {
          model: "Campaign",
          key: "campaignId"
        }
    },
    shortCode: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        field: 'shortCode'
    },
    ip: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      field: 'ip'
    },
    browser: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
        field: 'browser'
    },
    browserVersion: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
        field: 'browserVersion'
    },
    engine: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
        field: 'engine'
    },
    engineVersion: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
        field: 'engineVersion'
    },
    os: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        field: 'os'
    },
    osVersion: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        field: 'osVersion'
    },
    deviceVendor: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        field: 'deviceVendor'
    },
    deviceModel: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        field: 'deviceModel'
    },
    deviceType: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        field: 'deviceType'
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {});
  Tracker.associate = function(models) {
    // associations can be defined here
    models.Tracker.hasOne(models.Campaign, {foreignKey: 'campaignId'});
  };
  return Tracker;
};
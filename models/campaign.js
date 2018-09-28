'use strict';
var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Campaign = sequelize.define('Campaign', {
    campaignId: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'campaignId',
      default: 0
    },
    campaignName: {
      type: DataTypes.STRING,
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
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'assignedUser',
      default: false,
      references: { model: 'Users', key: 'userId' }
    },
    createdOn:{
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW
    },
    lastModifiedOn:{
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW
    }
  }, {});
  Campaign.associate = function(models) {
    // associations can be defined here
    models.Campaign.hasOne(models.User, {foreignKey: 'userId'});
  };
  return Campaign;
};
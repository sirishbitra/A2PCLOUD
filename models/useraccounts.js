'use strict';
var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var UserAccounts = sequelize.define('UserAccounts', {
    accountId: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'accountId',
      default: 0
    },
    accountName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      field: 'accountName'
    },
    apiKey: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      field: 'apiKey'
    },
    isActive:{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      field: 'isActive',
      default: false
    },
    createdOn:{
      type: Sequelize.DATE,  
      defaultValue: Sequelize.NOW, 
      validate:{isDate: true}
    },
    lastModifiedOn:{
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW,
      validate:{isDate: true}
    }
  }, {});
  UserAccounts.associate = function(models) {
    // associations can be defined here
  };
  return UserAccounts;
};
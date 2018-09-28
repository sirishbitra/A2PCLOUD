'use strict';
var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Codes = sequelize.define('Codes', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id',
      default: 0
    },
    shortCode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      field: 'shortCode'
    }
  }, {});
  Codes.associate = function(models) {
    // associations can be defined here
  };
  return Codes;
};
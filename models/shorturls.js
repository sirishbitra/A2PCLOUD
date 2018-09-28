'use strict';
var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var ShortUrls = sequelize.define('ShortUrls', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id',
      default: 0,
      references: {
          model: "Codes",
          key: "id"
        }
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
    campaignUrl: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      field: 'campaignUrl'
    },
    mobile: {
      type: DataTypes.STRING,
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
  }, {});
  ShortUrls.associate = function(models) {
    // associations can be defined here
    models.ShortUrls.hasOne(models.Codes, {foreignKey: 'id'});
    models.ShortUrls.hasOne(models.Campaign, {foreignKey: 'campaignId'});
  };
  return ShortUrls;
};
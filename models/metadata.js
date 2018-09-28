'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var MetaData = sequelize.define('MetaData', {
    level: {
      type: DataTypes.ENUM('campaign', 'single'),
      primaryKey: true,
      allowNull: false,
      field: 'level'
    },
    levelId: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      field: 'levelId'
    },
    metaType: {
      type: DataTypes.ENUM('og:title', 'og:type', 'og:url', 'og:image', 'og:image:secure_url', 'og:image:type', 'og:image:width', 'og:image:height', 'og:image:alt', 'og:audio', 'og:audio:secure_url', 'og:audio:type', 'og:description', 'og:site_name', 'og:video', 'og:video:secure_url', 'og:video:type', 'og:video:width', 'og:video:height'),
      unique: false,
      allowNull: false,
      field: 'metaType'
    },
    metaValue: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      field: 'metaValue',
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
  }, {});
  MetaData.associate = function(models) {
    // associations can be defined here
  };
  return MetaData;
};
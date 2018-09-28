'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserTokens = sequelize.define('UserTokens', {
    tokenId: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'tokenId',
      default: 0
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'userId',
      default: 0
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
  UserTokens.associate = function(models) {
    // associations can be defined here
  };
  return UserTokens;
};
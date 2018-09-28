'use strict';
var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userId: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'userId',
      default: 0
    },
    accountId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'accountId',
      default: false,
      references: { model: 'UserAccounts', key: 'accountId' }
    },
    userEmail: {
      type: DataTypes.STRING,
      validate: {isEmail: true},
      unique: true,
      allowNull: false,
      field: 'userEmail'
    },
    isActive:{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      field: 'isActive',
      default: false
    },
    password_hash: DataTypes.STRING,
    password:{
      type: DataTypes.VIRTUAL,
      set: function (val) {
      // Remember to set the data value, otherwise it won't be validated
          console.log('user model------',this);
          this.setDataValue('password', val);
          this.setDataValue('password_hash', (this.salt || 'test-salt') + val);
      },
      validate: {
          isLongEnough: function (val) {
          if (val.length < 5) {
              throw new Error("Please choose a longer password")
              }
          }
      }
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
  }, {
    timestamps: false
});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasOne(models.UserAccounts, {foreignKey: 'accountId'});
  };
  return User;
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MetaData', {
      level: {
        allowNull: false,
        primaryKey: true,
        type:   Sequelize.ENUM,
        values: ['campaign', 'single']
      },
      levelId: {
        allowNull: false,
        primaryKey: true,
        type:   Sequelize.INTEGER(11)
      },
      metaType: {
        primaryKey: true,
        allowNull: false,
        type:   Sequelize.ENUM,
        values: ['og:title', 'og:type', 'og:url', 'og:image', 'og:image:secure_url', 'og:image:type', 'og:image:width', 'og:image:height', 'og:image:alt', 'og:audio', 'og:audio:secure_url', 'og:audio:type', 'og:description', 'og:site_name', 'og:video', 'og:video:secure_url', 'og:video:type', 'og:video:width', 'og:video:height']
      },
      metaValue: {
        allowNull: false,
        type:   Sequelize.STRING
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
    return queryInterface.dropTable('MetaData');
  }
};
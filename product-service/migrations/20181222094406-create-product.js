'use strict';

const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Products',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: () => uuid()
        },
        name: {
          type: Sequelize.STRING
        },
        price: {
          type: Sequelize.FLOAT
        },
        color: {
          type: Sequelize.STRING
        },
        department: {
          type: Sequelize.STRING
        },
        adjective: {
          type: Sequelize.STRING
        },
        material: {
          type: Sequelize.STRING
        },
        product: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
        }
      },
      {
        timestamps: true
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};

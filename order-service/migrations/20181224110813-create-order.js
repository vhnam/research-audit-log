'use strict';

const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Orders',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: () => uuid()
        },
        customer: {
          type: Sequelize.UUID
        },
        total: {
          type: Sequelize.FLOAT
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
    return queryInterface.dropTable('Orders');
  }
};

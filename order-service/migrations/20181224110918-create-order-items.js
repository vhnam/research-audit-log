'use strict';

const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'OrderItems',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: () => uuid()
        },
        order: {
          type: Sequelize.UUID
        },
        product: {
          type: Sequelize.UUID
        },
        price: {
          type: Sequelize.FLOAT
        },
        quantity: {
          type: Sequelize.INTEGER
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
    return queryInterface.dropTable('OrderItems');
  }
};

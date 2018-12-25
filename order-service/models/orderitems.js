'use strict';

module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    order: DataTypes.UUID,
    product: DataTypes.UUID,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER
  });

  return OrderItem;
};

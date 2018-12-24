'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define('OrderItems', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    order: DataTypes.UUID,
    product: DataTypes.UUID,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER
  });

  return OrderItems;
};

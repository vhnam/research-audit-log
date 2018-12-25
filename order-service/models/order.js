'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    customer: DataTypes.UUID,
    total: DataTypes.FLOAT
  });

  return Order;
};

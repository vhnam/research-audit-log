'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    color: DataTypes.STRING,
    department: DataTypes.STRING,
    adjective: DataTypes.STRING,
    material: DataTypes.STRING,
    product: DataTypes.STRING
  });

  return Product;
};

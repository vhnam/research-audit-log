import { Order, OrderItem } from '../models';

const uuid = require('uuid/v4');

const config = require('../config');

module.exports = {
  createOrder: async user => {
    const order = await Order.create({
      id: uuid(),
      customer: user.id,
      total: 0
    });

    return order.id;
  },

  addItem: async (product, order) => {
    const orderItem = await OrderItem.create({
      id: uuid(),
      order: order,
      product: product.id,
      price: product.price,
      quantity: product.quantity
    });

    return orderItem;
  }
};

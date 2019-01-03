import { sendKafkaMessage } from '../../libs/kafka';

const orderService = require('../../services/order');

module.exports = {
  createOrder: async (req, res) => {
    try {
      let { product, order } = req.body;
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const useragent = req.headers['user-agent'];
      const user = req.decoded;

      if (!order) {
        order = await orderService.createOrder(req.decoded);

        sendKafkaMessage('Order', {
          ip,
          useragent,
          data: {
            order,
            user: user.id
          },
          action: 'Create order',
          time: new Date()
        });
      }

      const orderItem = await orderService.addItem(product, order);

      sendKafkaMessage('Order', {
        ip,
        useragent,
        data: {
          order,
          user: user.id,
          item: orderItem
        },
        action: 'Add Item to Order',
        time: new Date()
      });

      res.status(200).json(orderItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getOrder: async (req, res) => {
    try {
      const { id } = req.params;

      const order = await orderService.getOrder(id);

      res.status(200).json(order);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

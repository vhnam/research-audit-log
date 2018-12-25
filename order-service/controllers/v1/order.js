const orderService = require('../../services/order');

module.exports = {
  createOrder: async (req, res) => {
    try {
      let { product, order } = req.body;

      if (!order) {
        order = await orderService.createOrder(req.decoded);
      }

      const orderItem = await orderService.addItem(product, order);

      res.status(200).json(orderItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

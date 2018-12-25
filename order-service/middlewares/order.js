module.exports = {
  createOrder: async (req, res, next) => {
    const { product } = req.body;
    const attributes = ['id', 'price', 'quantity'];
    let equal = true;

    attributes.forEach(attribute => {
      if (!product.hasOwnProperty(attribute)) {
        equal = false;
      }
    });

    if (!(product.price > 0)) {
      equal = false;
    }

    if (product.quantity < 1) {
      equal = false;
    }

    if (!equal) {
      return res.status(400).json({ message: 'Invalid product' });
    }

    next();
  }
};

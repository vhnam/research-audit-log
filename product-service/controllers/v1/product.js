const productService = require('../../services/product');

module.exports = {
  getProducts: async (req, res) => {
    try {
      const query = {
        page: req.query.page ? req.query.page : 1
      };
      const products = await productService.getProducts(query);
      res.status(200).json(products);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productService.getProduct(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

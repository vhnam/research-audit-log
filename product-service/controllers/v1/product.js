const productService = require('../../services/product');

module.exports = {
  getProducts: async (req, res) => {
    try {
      const query = {
        page: (req.query.page) ? req.query.page : 1
      };
      const products = await productService.getProducts(query);
      res.status(200).json(products);
    } catch (err) {
      console.log(err.stack);
      res.status(400).json({ message: err.message });
    }
  }
};

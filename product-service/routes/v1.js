const express = require('express');
const router = express.Router();

const productValidator = require('../validators/product');
const productController = require('../controllers/v1/product');

router.get(
  '/products',
  productValidator.getProducts,
  productController.getProducts
);

module.exports = router;

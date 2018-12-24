const express = require('express');
const router = express.Router();

const productValidator = require('../validators/product');
const productController = require('../controllers/v1/product');

const authMiddleware = require('../middlewares/auth');

router.get(
  '/products',
  authMiddleware.checkToken,
  productValidator.getProducts,
  productController.getProducts
);

module.exports = router;

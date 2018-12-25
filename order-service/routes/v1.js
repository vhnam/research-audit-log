const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth');
const orderMiddleware = require('../middlewares/order');

const orderController = require('../controllers/v1/order');

const orderValidator = require('../validators/order');

router.post(
  '/orders',
  authMiddleware.checkToken,
  orderMiddleware.createOrder,
  orderValidator.createOrder,
  orderController.createOrder
);

module.exports = router;

const express = require('express');
const router = express.Router();

const authController = require('../controllers/v1/auth');

const authValidator = require('../validators/auth');

router.post('/login', authValidator.login, authController.login);
router.post('/logout', authValidator.logout, authController.logout);

module.exports = router;

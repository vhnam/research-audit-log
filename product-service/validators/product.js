const { validationResult, param } = require('express-validator/check');

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json('Invalid parameters');
  } else {
    next();
  }
};

module.exports = {
  getProducts: [[], validate],
  getProduct: [
    [
      param('id')
        .not()
        .isEmpty()
    ],
    validate
  ]
};

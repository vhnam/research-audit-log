const {
  validationResult,
  header,
  body,
  param
} = require('express-validator/check');

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json('Invalid parameters');
  } else {
    next();
  }
};

module.exports = {
  createOrder: [
    [
      header('authorization')
        .not()
        .isEmpty(),
      body('product')
        .not()
        .isEmpty()
    ],
    validate
  ],
  getOrder: [
    [
      param('id')
        .not()
        .isEmpty()
    ],
    validate
  ]
};

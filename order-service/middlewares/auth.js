const jwtLibrary = require('../libs/jwt');

module.exports = {
  checkToken: async (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(400).json({
        message: 'Missing token'
      });
    }

    jwtLibrary
      .verify(token)
      .then(decoded => {
        req.decoded = decoded;
        next();
      })
      .catch(err => {
        err.message = err.message.replace('jwt', 'Token');
        return res.status(400).json({
          message: err.message
        });
      });
  }
};

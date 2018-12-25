const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports = {
  sign: user => {
    const payload = {
      id: user.id,
      name: user.name,
      username: user.username
    };

    const signOptions = {
      issuer: config.JWT_ISSUER,
      subject: config.JWT_SUBJECT,
      audience: config.JWT_AUDIENCE,
      algorithm: config.JWT_ALGORITHM,
      expiresIn: config.JWT_EXPIRES_IN
    };

    const token = jwt.sign(payload, config.JWT_PRIVATE_KEY, signOptions);

    return token;
  }
};

const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports = {
  verify: token => {
    const verifyOptions = {
      issuer: config.JWT_ISSUER,
      subject: config.JWT_SUBJECT,
      audience: config.JWT_AUDIENCE,
      algorithm: config.JWT_ALGORITHM,
      expiresIn: config.JWT_EXPIRES_IN
    };

    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        config.JWT_PUBLIC_KEY,
        verifyOptions,
        (err, decoded) => {
          if (err) {
            reject(err);
          }

          resolve(decoded);
        }
      );
    });
  }
};

import { User } from '../models';

const bcrypt = require('bcrypt');

const jwtLibrary = require('../libs/jwt');

module.exports = {
  login: async user => {
    const loggedUser = await User.findOne({
      where: {
        username: user.username
      }
    });

    const comparedPassword = bcrypt.compareSync(
      user.password,
      loggedUser.password
    );

    if (!comparedPassword) {
      return false;
    }

    const token = jwtLibrary.sign(loggedUser);

    return token;
  },

  logout: async user => {}
};

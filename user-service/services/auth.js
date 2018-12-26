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

    return {
      id: loggedUser.id,
      username: loggedUser.username,
      name: loggedUser.name,
      accessToken: token
    };
  },

  logout: async user => {}
};

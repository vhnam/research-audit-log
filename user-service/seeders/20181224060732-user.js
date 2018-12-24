const faker = require('faker');
const uuid = require('uuid/v4');
const bcrypt = require('bcrypt');

const config = require('../config');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = [];
    let salt = null;

    for (let index = 0; index < 10; index++) {
      salt = bcrypt.genSaltSync(config.DB_SALT);

      users.push({
        id: uuid(),
        name: faker.name.findName(),
        username: faker.internet.userName(),
        password: bcrypt.hashSync('secret', salt)
      });
    }

    return queryInterface.bulkInsert('Users', users);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};

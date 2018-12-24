const faker = require('faker');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let products = [];

    for (let index = 0; index < 1000; index++) {
      products.push({
        id: uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        color: faker.commerce.color(),
        department: faker.commerce.department(),
        adjective: faker.commerce.productAdjective(),
        material: faker.commerce.productMaterial(),
        product: faker.commerce.product()
      });
    }

    return queryInterface.bulkInsert('Products', products, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};

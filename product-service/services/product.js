import { Product } from '../models';

const config = require('../config');

module.exports = {
  getProducts: async query => {
    return new Promise((resolve, reject) => {
      let offset = 0;
      const limit = parseInt(config.API_LIMIT);

      Product.count()
        .then(pagination => {
          const pages = Math.ceil(pagination / limit);
          offset = limit * (query.page - 1);

          return Product.findAll({
            limit: limit,
            offset: offset
          })
            .then(products => {
              resolve({
                data: products,
                total: pagination,
                per_page: limit,
                last_page: pages,
                current_page: query.page
              });
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

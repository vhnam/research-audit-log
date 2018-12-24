require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,

    API_LIMIT: process.env.API_LIMIT,
    API_PORT: process.env.API_PORT,
    API_VERSION: process.env.API_VERSION
  }
};

require('dotenv').config();

const fs = require('fs');

const privateKey = fs.readFileSync(`${__dirname}/keys/private.key`);
const publicKey = fs.readFileSync(`${__dirname}/keys/public.key`);

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    salt: process.env.DB_SALT,

    API_LIMIT: process.env.API_LIMIT,
    API_PORT: process.env.API_PORT,
    API_VERSION: process.env.API_VERSION,

    JWT_PUBLIC_KEY: publicKey,
    JWT_PRIVATE_KEY: privateKey,
    JWT_ISSUER: process.env.JWT_ISSUER,
    JWT_SUBJECT: process.env.JWT_SUBJECT,
    JWT_AUDIENCE: process.env.JWT_AUDIENCE,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    JWT_ALGORITHM: process.env.JWT_ALGORITHM
  }
};

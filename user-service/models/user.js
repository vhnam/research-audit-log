'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return User;
};

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nuevo_servicio', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
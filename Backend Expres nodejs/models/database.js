const { Sequelize } = require('sequelize');

// Configura la conexión a la base de datos MySQL
const sequelize = new Sequelize('nuevo_servicio', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
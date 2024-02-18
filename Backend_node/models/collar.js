const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Collar = sequelize.define('Collar', {
  nombre: DataTypes.STRING,
  color: DataTypes.STRING,
  material: DataTypes.STRING,
  precio: DataTypes.DECIMAL(10, 2),
  estado: DataTypes.BOOLEAN,
  fechaHora: DataTypes.DATE,
});

module.exports = Collar;
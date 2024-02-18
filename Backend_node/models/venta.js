const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Cliente = require('./cliente');
const Collar = require('./collar');

const Venta = sequelize.define('Venta', {
  cantidad: DataTypes.INTEGER,
  total: DataTypes.DECIMAL(10, 2),
  fechaHora: DataTypes.DATE,
});

Venta.belongsTo(Cliente);
Venta.belongsTo(Collar);

module.exports = Venta;
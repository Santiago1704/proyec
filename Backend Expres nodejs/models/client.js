const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Cliente = sequelize.define('Cliente', {
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  correo: {
    type: DataTypes.STRING,
    unique: true,
  },
  telefono: {
    type: DataTypes.STRING,
    unique: true,
  },
  direccion: DataTypes.STRING,
  estado: DataTypes.BOOLEAN,
  fechaHora: DataTypes.DATE,
});

module.exports = Cliente;
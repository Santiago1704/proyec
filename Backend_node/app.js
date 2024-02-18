const express = require('express');
const sequelize = require('./models/database.js');
const Cliente = require('./models/client.js');
const Collar = require('./models/collar.js');
const Venta = require('./models/venta.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Definir rutas para operaciones CRUD en Clientes, Collares y Ventas

// obtener todos los clientes
app.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los clientes' });
  }
});

app.get('/ventas', async (req, res) => {
  try {
    const ventas = await Venta.findAll();
    res.json(ventas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los ventas' });
  }
});

app.get('/collares', async (req, res) => {
  try {
    const collares = await Collar.findAll();
    res.json(collares);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los collares' });
  }
});

// Sincronizar modelos con la base de datos y arrancar el servidor
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con la base de datos.');
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Servidor Express escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

startServer();
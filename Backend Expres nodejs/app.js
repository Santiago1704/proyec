const express = require('express');
const sequelize = require('./database');
const Cliente = require('./models/cliente');
const Collar = require('./models/collar');
const Venta = require('./models/venta');

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

// Sincronizar modelos con la base de datos y arrancar el servidor
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con la base de datos.');
    await sequelize.sync(); // Esto sincronizará todos los modelos con la base de datos.
    app.listen(PORT, () => {
      console.log(`Servidor Express escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

startServer();
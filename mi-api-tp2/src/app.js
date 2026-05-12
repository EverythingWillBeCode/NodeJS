const express = require('express');
const app = express();

const sequelize = require('./config/database');

const pacientesRoutes = require('./routes/pacientes.routes');
const medicosRoutes = require('./routes/medicos.routes');
const tratamientosRoutes = require('./routes/tratamientos.routes');

app.use(express.json());

app.use('/pacientes', pacientesRoutes);
app.use('/medicos', medicosRoutes);
app.use('/tratamientos', tratamientosRoutes);

sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.log(err));

module.exports = app;

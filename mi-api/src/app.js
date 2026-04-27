const express = require('express');

const pacientesRoutes = require('./routes/pacientes.routes');
const medicosRoutes = require('./routes/medicos.routes');
const tratamientosRoutes = require('./routes/tratamientos.routes');

const app = express();

app.use(express.json());

app.use('/pacientes', pacientesRoutes);
app.use('/medicos', medicosRoutes);
app.use('/tratamientos', tratamientosRoutes);

module.exports = app;

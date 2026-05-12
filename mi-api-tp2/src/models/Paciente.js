const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Medico = require('./Medico');

const Paciente = sequelize.define('Paciente', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Medico.hasMany(Paciente);
Paciente.belongsTo(Medico);

module.exports = Paciente;

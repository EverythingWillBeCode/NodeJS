const Paciente = require('../models/Paciente');
const Medico = require('../models/Medico');

exports.getAll = async (req, res) => {
    const pacientes = await Paciente.findAll({
        include: Medico
    });

    res.json(pacientes);
};

exports.getById = async (req, res) => {
    const paciente = await Paciente.findByPk(req.params.id, {
        include: Medico
    });

    if (!paciente) {
        return res.status(404).json({
            mensaje: 'Paciente no encontrado'
        });
    }

    res.json(paciente);
};

exports.create = async (req, res) => {
    const { nombre, edad, MedicoId } = req.body;

    if (!nombre || !edad) {
        return res.status(400).json({
            mensaje: 'Nombre y edad son obligatorios'
        });
    }

    const paciente = await Paciente.create({
        nombre,
        edad,
        MedicoId
    });

    res.status(201).json(paciente);
};

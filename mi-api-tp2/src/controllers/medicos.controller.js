const Medico = require('../models/Medico');

exports.getAll = async (req, res) => {
    const medicos = await Medico.findAll();
    res.json(medicos);
};

exports.getById = async (req, res) => {
    const medico = await Medico.findByPk(req.params.id);

    if (!medico) {
        return res.status(404).json({ mensaje: 'Médico no encontrado' });
    }

    res.json(medico);
};

exports.create = async (req, res) => {
    const { nombre, especialidad } = req.body;

    if (!nombre || !especialidad) {
        return res.status(400).json({
            mensaje: 'Nombre y especialidad son obligatorios'
        });
    }

    const medico = await Medico.create({ nombre, especialidad });

    res.status(201).json(medico);
};

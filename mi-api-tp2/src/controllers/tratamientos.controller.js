const Tratamiento = require('../models/Tratamiento');

exports.getAll = async (req, res) => {
    const tratamientos = await Tratamiento.findAll();
    res.json(tratamientos);
};

exports.getById = async (req, res) => {
    const tratamiento = await Tratamiento.findByPk(req.params.id);

    if (!tratamiento) {
        return res.status(404).json({
            mensaje: 'Tratamiento no encontrado'
        });
    }

    res.json(tratamiento);
};

exports.create = async (req, res) => {
    const { descripcion, duracion } = req.body;

    if (!descripcion || !duracion) {
        return res.status(400).json({
            mensaje: 'Descripción y duración son obligatorias'
        });
    }

    const tratamiento = await Tratamiento.create({
        descripcion,
        duracion
    });

    res.status(201).json(tratamiento);
};

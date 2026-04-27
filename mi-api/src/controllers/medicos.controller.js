exports.getAll = (req, res) => {
    res.send("Listado de medicos");
};

exports.getById = (req, res) => {
    const { id } = req.params;
    res.send(`Información del medico ${id}`);
};

exports.create = (req, res) => {
    res.send("Medico creado");
};

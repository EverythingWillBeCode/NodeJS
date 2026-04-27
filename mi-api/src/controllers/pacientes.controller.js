exports.getAll = (req, res) => {
    res.send("Listado de pacientes");
};

exports.getById = (req, res) => {
    const { id } = req.params;
    res.send(`Información del paciente ${id}`);
};

exports.create = (req, res) => {
    res.send("Paciente creado");
};

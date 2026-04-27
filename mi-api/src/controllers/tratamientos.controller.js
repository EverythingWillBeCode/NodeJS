exports.getAll = (req, res) => {
    res.send("Listado de tratamientos");
};

exports.getById = (req, res) => {
    const { id } = req.params;
    res.send(`Información del tratamiento ${id}`);
};

exports.create = (req, res) => {
    res.send("Tratamiento creado");
};

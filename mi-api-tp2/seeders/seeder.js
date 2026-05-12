const sequelize = require('../src/config/database');

const Medico = require('../src/models/Medico');
const Paciente = require('../src/models/Paciente');
const Tratamiento = require('../src/models/Tratamiento');

async function seed() {

    await sequelize.sync({ force: true });

    const medico1 = await Medico.create({
        nombre: 'Juan Perez',
        especialidad: 'Cardiología'
    });

    const medico2 = await Medico.create({
        nombre: 'Ana Gomez',
        especialidad: 'Pediatría'
    });

    await Paciente.create({
        nombre: 'Carlos López',
        edad: 45,
        MedicoId: medico1.id
    });

    await Paciente.create({
        nombre: 'Lucía Fernández',
        edad: 12,
        MedicoId: medico2.id
    });

    await Tratamiento.create({
        descripcion: 'Tratamiento cardíaco',
        duracion: '6 meses'
    });

    await Tratamiento.create({
        descripcion: 'Control pediátrico',
        duracion: '1 año'
    });

    console.log('Datos cargados correctamente');
}

seed();

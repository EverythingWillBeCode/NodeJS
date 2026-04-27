const express = require('express');
const router = express.Router();

const pacientesController = require('../controllers/pacientes.controller');

router.get('/', pacientesController.getAll);
router.get('/:id', pacientesController.getById);
router.post('/', pacientesController.create);

module.exports = router;

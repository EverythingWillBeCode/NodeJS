const express = require('express');
const router = express.Router();

const tratamientosController = require('../controllers/tratamientos.controller');

router.get('/', tratamientosController.getAll);
router.get('/:id', tratamientosController.getById);
router.post('/', tratamientosController.create);

module.exports = router;

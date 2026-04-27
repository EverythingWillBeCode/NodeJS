const express = require('express');
const router = express.Router();

const medicosController = require('../controllers/medicos.controller');

router.get('/', medicosController.getAll);
router.get('/:id', medicosController.getById);
router.post('/', medicosController.create);

module.exports = router;

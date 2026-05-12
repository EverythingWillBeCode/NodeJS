const express = require('express');
const router = express.Router();
const controller = require('../controllers/pacientes.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);

module.exports = router;

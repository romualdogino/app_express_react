var express = require('express');
var router = express.Router();
var EntradaController = require('../controllers/EntradaController')

/* GET users listing. */
router.get('/', EntradaController.getList)
router.get('/:id',EntradaController.getOne)
router.post('/', EntradaController.create)

module.exports = router; 

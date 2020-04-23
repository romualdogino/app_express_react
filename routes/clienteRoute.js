var express = require('express');
var router = express.Router();
var ClienteController = require('../controllers/ClienteController')

/* GET users listing. */
router.get('/', ClienteController.getList)
router.get('/:id',ClienteController.getOne)
router.post('/', ClienteController.create)

module.exports = router; 

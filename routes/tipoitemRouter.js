var express = require('express');
var router = express.Router();
var TipoitemController = require('../controllers/TipoitemController')

/* GET users listing. */
router.get('/', TipoitemController.getList)
router.get('/select', TipoitemController.getSelect)
router.get('/:id',TipoitemController.getOne)
router.post('/create', TipoitemController.create)

module.exports = router; 

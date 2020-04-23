var express = require('express');
var router = express.Router();
var ItemController = require('../controllers/ItemController')

/* GET users listing. */
router.get('/', ItemController.getList)
router.get('/:id',ItemController.getOne)
router.post('/', ItemController.create)

module.exports = router; 

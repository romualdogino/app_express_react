var express = require('express');
var router = express.Router();
var StatusController = require('../controllers/StatusController')

/* GET users listing. */
router.get('/', StatusController.getList)
router.get('/:id',StatusController.getOne)
router.post('/create', StatusController.create)

module.exports = router; 

var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController')

/* GET users listing. */
router.get('/', userController.getList)
router.get('/:id',userController.getOne)
router.post('/create', userController.create)

module.exports = router;

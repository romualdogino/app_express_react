var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/AuthController')

/* GET users listing. */

router.post('/login', AuthController.login)

router.get('/logout', function (req, res) {
    res.status(200).send({ auth: false, token: null });
})


module.exports = router; 

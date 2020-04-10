"use strict"
const User = require('../models/User')
const fs = require('fs')
const jwt = require('jsonwebtoken')

exports.login = async function (req, res, limit) {

    try {
        const user = await User.find({ 'name': req.body.user })
        const id = user[0]._id
        if (req.body.user === user[0].name
            && req.body.pwd === user[0].pwd) {
            const privateKey = fs.readFileSync('./private.key', 'utf8')
            var token = jwt.sign({ id }, privateKey, {
                expiresIn: 30000, // expires in 5min
                algorithm: "RS256"
            })
            res.setHeader('token', token)
            return res.status(200)
                .json({ auth: true, token: token })
        }
        return res.status(500)
            .send('Login inválido!');

    } catch (e) {
        res.json({ msg: e })
    }
}
//
// app.post('/login', (req, res, next) => {
//   if (req.body.user === 'luiz' && req.body.pwd === '123') {
//     const id = 1; //esse id viria do banco de dados
//     const privateKey = fs.readFileSync('./private.key', 'utf8')
//     var token = jwt.sign({ id }, privateKey, {
//       expiresIn: 30000, // expires in 5min
//       algorithm: "RS256"
//     });
//     return res.status(200).header({ token: token }).send({ auth: true, token: token });
//   }
//   res.status(500).send('Login inválido!');
// })
//
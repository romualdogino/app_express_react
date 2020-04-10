"use strict"
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        unique: true,
        require: true
    },
    pwd: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    avatar_url: {
        type: String,
        default: './img/avatar/default.png'
    },
    is_admin: {
        type: String,
        default: ""
    },
    is_super: {
        type: String,
        default: ""
    },
    is_ativo: {
        type: String,
        default: ""
    },
    setor: [],
    created: {
        type: Date,
        default: Date.now
    },
    last_login: {
        type: Date
    }

})

module.exports = mongoose.model('User', UserSchema)

exports.geraHash = async function () {
    try {
        await bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(123456, salt, function (err, hash) {
                return hash
            });
        });
    } catch (e) {
        throw Error('errrou')
    }

}
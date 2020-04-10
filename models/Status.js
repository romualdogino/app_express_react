"use strict"
const mongoose = require('mongoose')

const StatusSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    usadopor: {
        type: String,
        required: true
    },
    criado: {
        type: Date,
        default: Date.now
    },
    alterado: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Status', StatusSchema)
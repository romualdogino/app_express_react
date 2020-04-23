"use strict"
const Mongoose = require('mongoose')

const TipoitemSchema = new Mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    requisitos:[],
    descricao:{
        type: String,
    },
    ativo: {
        type: String,
        default: "on"
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

module.exports = Mongoose.model('Tipoitem', TipoitemSchema)
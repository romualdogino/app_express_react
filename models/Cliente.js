const mongoose = require("mongoose")

const ClienteSchima = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {type: String},
    cnpj: {type: String},
    endereco: [{
        rua: {type: String},
        numero: {type: String},
        bairro: {type: String},
        cidade: {type: String},
        estado: {type: String},
   
        maps:{type: String}
    }],

    contatos: [{
        nome: {type: String},
        email: {type: String},
        fone: {type: String}
    }],

    status: {type: String},
    
    historico: [],
    contratos: [],
    criado: {type: Date, default: Date.now},
    updated: { type: Date, default: Date.now },


})
module.exports = mongoose.model("Cliente", ClienteSchima)
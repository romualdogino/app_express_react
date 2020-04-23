const mongoose = require("mongoose")

const ContratoSchima = mongoose.Schema({
    cliente: Schema.Types.ObjectId,//id
    nome: {
        type: String
    },
    endereco: [{
        rua: {type: String},
        numero: {type: String},
        bairro: {type: String},
        cidade: {type: String},
        estado: {type: String},

        maps: {type: String}
    }],
    status: {type: String},
    datacontrato: {type: Date, default: Date.now},
    datainicio: {type: Date},
    datatermino: {type: Date},
    contatos: [],
    itens: [],
    itensreserva: [],
    historicorenovacao:[],
    historicoos: [],
    obs:[],
    updated: { type: Date, default: Date.now },


})
module.exports = mongoose.model("Contrato", ContratoSchima)
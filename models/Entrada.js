const mongoose = require("mongoose")

const EntradaSchima = mongoose.Schema({
    tipoitem:{type: String}, //id

    qtdinicial: {type: String},
    qtd: {type: String},
    datacompra: {},
    garantia: {type: String},
    ordemcompra: {type: String},
    obs: [],
    historico: [],
    ativo: {type: Boolean, default: true},
    criado:{type: Date, default: Date.now},
    updated: { type: Date, default: Date.now },
})
module.exports = mongoose.model("Entrada", EntradaSchima) 
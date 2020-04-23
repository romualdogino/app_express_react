const mongoose = require("mongoose")

const ItemSchima = mongoose.Schema({
    entrada: {type: String},
    tombamento:{type: String},
    requisitos:[], //tipo_item
    marca:{type: String},
    modelo:{type: String},
    locado: {type: Boolean},
    historicocliente: [],
    historicoos: [],
    historicoobs: [],
    status:{type: String},
    obs:[],
    updated: { type: Date, default: Date.now },


})
module.exports = mongoose.model("Item", ItemSchima)
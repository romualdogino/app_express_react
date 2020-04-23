const mongoose = require("mongoose")

const EstoqueSchima = mongoose.Schema({

    updated: { type: Date, default: Date.now },
})
module.exports = mongoose.model("Estoque", EstoqueSchima)
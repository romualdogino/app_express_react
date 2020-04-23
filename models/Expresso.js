const mongoose =require("mongoose")

const ExpressoSchima = mongoose.Schema({
    unidade: {type: String},
    setor: [],
    historico:[],
    
})
module.exports = mongoose.model("Expresso", ExpressoSchima)
const Service = require('../services/tipoitemService')


exports.getOne = async function (req, res, next) {

}

exports.getList = async function (req, res, next) {

}
exports.getSelect = async function (req, res, next) {
    try {
        const data = await Service.getSelect(req,res,next) 
        return res.send(data)
        
    } catch (e) {
        console.log("aqui")
    }

}

exports.create = async function (req, res, next) {
    try {
    const data = await Service.create(req, res, next)
    res.json(data)
    } catch (e) {
     console.log(e)
    }
}
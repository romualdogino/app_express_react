const Service = require('../services/statusService')

exports.getOne = async function (req, res, next) {

}
exports.getList = async function (req, res, next) {
    try {
        const data = await Service.getList(req, res, next).catch(e => {
            throw console.log(e)
        })
        res.status(200).send(data)
    } catch (e) {
        res.json({ msg: e })
    }
}

exports.create = async function (req, res, next) {
    console.log("controler")
    try {
        const data = await Service.create(req, res, next).catch(e => {
            throw console.log(e)
        })
        res.status(200).send(data)
        //res.json(data) // res.status(200).send(data)
    } catch (e) {
        res.json({ msg: e })
    }
}
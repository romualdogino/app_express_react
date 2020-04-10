const Service = require('../services/userService')

exports.getList = async function (req, res, next) {
    try {
        var data = await Service.getList(req, res, next)
        res.status(200).json(data)
    } catch (e) {
        res.json({ msg: e })
    }
}
exports.getOne = async function (req, res) {
    try {
        var data = await Service.getOne(req, res)
        res.status(200).json(data)
    } catch (e) {
        res.json({ mgs: e })
    }
}

exports.create = async function (req, res, next) {
    try {
        var data = await Service.create(req, res, next)
        res.status(200).send(data)

    } catch (e) {
        res.json({ msg: e })
    } 

}
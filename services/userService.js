var User = require('../models/User')

exports.getList = async function (res, res, limit) {
    try {
        var users = await User.find()
        res.json(users)
    } catch (e) {
        res.json({ msg: e })
    }
}
exports.getOne = async function (req, res) {
    console.log(req.params.id)
    try {
        var user = await User.findById(req.params.id)
        res.json(user)
    } catch (e) {
        res.json({mgs: e})
    }
}
exports.create = async function (data, res) {
    // console.log(data.body)
    var item = new User()
    item.login = data.body.login
    item.name = data.body.name
    item.pwd = data.body.pwd
    item.setor.push(data.body.setor)

    try {
        const saveItem = await item.save()
        res.json(saveItem)
    } catch (e) {
        res.json({ msg: e })
    }

}
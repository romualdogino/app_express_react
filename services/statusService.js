var Status = require('../models/Status')

exports.getList = async function (req, res, limit) {
    try {
        const status = await Status.find().catch(e => {
            console.log(e)
        })
        
        res.json(status)
    } catch (e) {
        res.json({ msg: e })
    }
}
exports.getOne = async function (req, res) {
    console.log(req.params.id)
    try {
        // var user = await User.findById(req.params.id)
        res.json(user)
    } catch (e) {
        res.json({ mgs: e })
    }
}
exports.create = async function (data, res) {
    console.log("serviço")
    console.log(data.body)
    const item = new Status()
    item.codigo = data.body.codigo
    item.nome = data.body.nome
    item.descricao = data.body.descricao
    item.usadopor = data.body.usadopor
    try {
        const saveItem = await item.save()
        res.json(saveItem)
    } catch (e) {
        res.json({ msg: e })
    }

}
var Tipo = require('../models/Tipoitem')

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
        res.json({ mgs: e })
    }
}
exports.getSelect = async (req, res, next) => {
    try {
        const tipo2 = []
        const tipo = await Tipo.find()
            .select('nome')
            .where('ativo').equals('on')
        console.log({ "tipo1": tipo })
        console.log({ "tipo2": tipo })
        res.status(200).send(tipo)
    } catch (e) {
        console.log(e.error)
    }

}
exports.create = async function (data, res) {
    // console.log(data.body)
    var item = new Tipo()
    item.nome = data.body.tipo
    item.requisitos.push(data.body.requisitos)
    item.descricao = data.body.descricao

    try {
        const saveItem = await item.save()
        res.json(saveItem)
    } catch (e) {
        res.json({ msg: e })
    }

}
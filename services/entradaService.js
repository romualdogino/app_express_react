const Entrada = require('../models/Entrada')
const Tempo = require('../config/aux')

exports.getList = async function (res, res, limit) {
    try {
        const entrada = await Entrada.find()
        res.status(200).json(entrada)
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
    // console.log(data.body)

    const item = new Entrada()
    item.tipoitem = data.body.tipoitem
    item.garantia = data.body.garantia
    item.qtd = data.body.qtd
    item.qtdinicial = data.body.qtd

    item.ordemcompra = data.body.ordemcompra
    item.datacompra = data.body.datacompra

    item.obs.push({'data': Tempo.getDataAtual(), 'texto':data.body.obs})

    item.historico.push({ 'data': Tempo.getDataAtual(), 'texto': data.body.obs })

    // console.log(item)


    try {
        const saveItem = await item.save()
        res.json(saveItem)
    } catch (e) {
        res.json({ msg: e })
    }

}
"use strict"
const Service = require('../services/authService')

exports.login = async (req, res, next) => {
    try {
        const login = await Service.login(req, res, next)
        const json = await login.json()
        return next()
    } catch (e) {
        
        return next(e)
    }
}
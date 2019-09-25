'use strict'
const authService = require('../services/auth-service')
const loginService = require('../services/login-service')
const loginResponse = require('../traffic/response/login-response')
const tokenResponse = require('../traffic/response/token-response')
const httpStatus = require('http-status-codes')

exports.authenticate = async (req, res, next) => {
    const response = await loginService.getByUserPass(req.body.user, req.body.pass);

    if (!response) {
        res.status(httpStatus.NOT_FOUND).send({ message: "Login não encontrado" })
        return
    }

    const login = new loginResponse(response.log_n_id,
        response.log_s_usuario,
        response.log_b_ativo);

    const accessToken = await authService.generateToken(login);
    const token = new tokenResponse(accessToken, login.user, login.active);

    res.status(httpStatus.CREATED).send(token);
}

exports.refreshToken = async (req, res, next) => {
    const tokenRequest = req.body.token || req.query.token || req.headers['authorization'];
    const data = await authService.decodeToken(tokenRequest);
    const response = await loginService.getById(data.id);

    if (!response) {
        res.status(httpStatus.NOT_FOUND).send({ message: "Login não encontrado" })
        return
    }

    const login = new loginResponse(response.log_n_id,
        response.log_s_usuario,
        response.log_b_ativo);

    const accessToken = await authService.generateToken(login);
    const token = new tokenResponse(accessToken, login.user, login.active);

    res.status(httpStatus.CREATED).send(token)
}
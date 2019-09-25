'use strict'
const service = require('../services/city-service')
const httpStatus = require('http-status-codes')

exports.get = async (req, res, next) => {
    const response = await service.get();

    if (!response) {
        res.status(httpStatus.NOT_FOUND).send({ message: "Nenhum dado encontrado" })
        return
    }

    res.status(httpStatus.CREATED).send(response);
}
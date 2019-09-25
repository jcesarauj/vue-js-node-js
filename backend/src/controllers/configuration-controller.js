'use strict'
const httpStatus = require('http-status-codes');

exports.get = (req, res, next) => {
    res.status(httpStatus.OK).send(req.body);
}

exports.post = (req, res, next) => {
    res.status(httpStatus.OK).send(req.body);
}
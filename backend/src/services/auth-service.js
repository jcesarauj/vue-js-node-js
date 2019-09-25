'use strict';
const jwt = require('jsonwebtoken');
const httpStatus = require('http-status-codes')

exports.generateToken = async (data) => {
    return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' });
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, global.SALT_KEY);
    return data;
}

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers[global.TOKEN_NAME];

    if (!token) {
        res.status(httpStatus.UNAUTHORIZED).json({ message: 'Acesso Restrito' });
    } else {
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                res.status(httpStatus.UNAUTHORIZED).json({
                    message: 'Token Inválido'
                });
            } else {
                next();
            }
        });
    }
};

exports.isAdmin = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers[global.TOKEN_NAME];

    if (!token) {
        res.status(httpStatus.UNAUTHORIZED).json({ message: 'Acesso Restrito' });
    }
    else {
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                res.status(httpStatus.UNAUTHORIZED).json({ message: 'Token Inválido' });
            } else {
                if (decoded.roles.includes('admin')) { next() }
                else {
                    res.status(httpStatus.UNAUTHORIZED).json({ message: 'Funcionalidade restrita para administradores' });
                }
            }
        });
    }
};
'use strict';
const repository = require('../repositories/login-repository');
const md5 = require('md5')

exports.getByUserPass = async (user, pass) => {
    const response = await repository.authenticate({
        user: user,
        pass: md5(pass + global.SALT_KEY)
    })
    return response;
};

exports.getById = async (id) => {
    const response = await repository.getById(id);
    return response;
};

exports.save = async (request) => {
    let model = await repository.getById(request.id);
    model = await (model != null ? repository.update(request) : repository.insert(request));
    return model;
};
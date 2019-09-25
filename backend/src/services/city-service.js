'use strict';
const repository = require('../repositories/city-repository');

exports.get = async () => {
    const response = await repository.get();
    return response;
};
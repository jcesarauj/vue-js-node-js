'use strict'
var Entity = require('../models/city');
db = require('../repositories/database');

exports.get = async (id) => {
    let model = await Entity.findAll({
        'where': {
            cid_b_ativo: true
        }
    });
    return model;
}
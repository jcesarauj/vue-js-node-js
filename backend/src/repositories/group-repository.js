'use strict'
var Group = require('../models/group');
db = require('../repositories/database');

exports.insert = async (data) => {
    const model = await Group.create({
        grp_s_nome: data.name,
        grp_b_ativo: data.active,
        grp_d_data_validade: data.validDate,  
        grp_ver_n_id: 4 //expert por 15 dias
    });
    return model;    
}

exports.update = async (data) => {
    const model = await Group.update({
        grp_s_nome: data.name,
        grp_b_ativo: data.active,
        cid_d_data_validade: data.validDate
    });
    return model;    
}

exports.getById = async (id) => {
    let model = await Group.findOne({
        where: {
            'grp_n_id': id
        }
    });
    return model;
}
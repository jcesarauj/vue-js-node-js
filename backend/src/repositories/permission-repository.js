'use strict'
var Permission = require('../models/permission');
db = require('../repositories/database');

exports.insert = async (data) => {
    const created = await Permission.create({
        per_grp_n_id: data.group,       
        per_s_nome: data.name,
        per_b_cadastrar: data.include,
        per_b_alterar: data.alter,
        per_b_deletar: data.exclude,
        per_b_ativo: data.active
    });
    return created;    
}

exports.updated = async (data) => {
    const created = await Permission.update({
        per_grp_n_id: data.group,       
        per_s_nome: data.name,
        per_b_cadastrar: data.include,
        per_b_alterar: data.alter,
        per_b_deletar: data.exclude,
        per_b_ativo: data.active
    });
    return created;    
}

exports.getById = async (id) => {
    let model = await Permission.findOne({
        where: {
            'per_n_id': id
        }
    });
    return model;
}
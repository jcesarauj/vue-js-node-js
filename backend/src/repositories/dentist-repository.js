'use strict'
var Dentist = require('../models/dentist');
db = require('../repositories/database');

exports.insert = async (data) => {
    const model = await Dentist.create({
        det_grp_n_id: data.group,
        det_cid_n_id: data.city,        
        det_s_nome: data.name,
        det_s_cpf: data.cpf,
        det_s_cnpj: data.cnpj,
        det_s_contato: data.contact,
        det_s_endereco: data.adress,
        det_s_bairro: data.neighborhood,
        det_s_cep: data.zipCode,
        det_s_cro: data.cro,
        det_s_telefone: data.phone,
        det_s_celular: data.cellPhone,
        det_s_email: data.mail,
        det_s_observacao: data.observation,
        det_s_nome_clinica: data.clinicName,
        det_s_tipo_det: data.type,
        det_s_rg: data.rg,
        det_s_ie: data.ie,
        det_b_ativo: data.active
    });
    return model;    
}

exports.updated = async (data) => {
    const model = await Dentist.update({
        det_n_id: data.id,       
        det_grp_n_id: data.group,
        det_cid_n_id: data.city,        
        det_s_nome: data.name,
        det_s_cpf: data.cpf,
        det_s_cnpj: data.cnpj,
        det_s_contato: data.contact,
        det_s_endereco: data.adress,
        det_s_bairro: data.neighborhood,
        det_s_cep: data.zipCode,
        det_s_cro: data.cro,
        det_s_telefone: data.phone,
        det_s_celular: data.cellPhone,
        det_s_email: data.mail,
        det_s_observacao: data.observation,
        det_s_nome_clinica: data.clinicName,
        det_s_tipo_det: data.type,
        det_s_rg: data.rg,
        det_s_ie: data.ie,
        det_b_ativo: data.active
    });
    return model;    
}

exports.getById = async (id) => {
    let model = await Dentist.findOne({
        where: {
            'det_n_id': id
        }
    });
    return model;
}
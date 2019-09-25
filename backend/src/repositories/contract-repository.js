'use strict'
var Contract = require('../models/contract');
db = require('../repositories/database');

exports.insert = async (data) => {
    const created = await Contract.create({
        con_cid_n_id: data.city,
        con_grp_n_id: data.group,
        con_s_nome: data.name,
        con_s_razao_social: data.socialName,
        con_s_cpfcnpj: data.cpfCnpj,
        con_s_ierg: data.rgIe,
        con_s_endereco:data.adress,
        con_s_bairro:data.neighborhood,
        con_s_cep:data.zipCode,
        con_b_juridico:data.isLegalPerson,
        con_b_ativo:data.active,
        con_b_exibir_site:data.isShowSite
    });
    return created;    
}

exports.updated = async (data) => {
    const created = await Contract.update({
        con_n_id: data.id,       
        con_cid_n_id: data.city,
        con_grp_n_id: data.group,
        con_s_nome: data.name,
        con_s_razao_social: data.socialName,
        con_s_cpfcnpj: data.cpfCnpj,
        con_s_ierg: data.rgIe,
        con_s_endereco:data.adress,
        con_s_bairro:data.neighborhood,
        con_s_cep:data.zipCode,
        con_b_juridico:data.isLegalPerson,
        con_b_ativo:data.active,
        con_b_exibir_site:data.isShowSite
    });
    return created;    
}

exports.getById = async (id) => {
    let model = await Contract.findOne({
        where: {
            'con_n_id': id
        }
    });
    return model;
}
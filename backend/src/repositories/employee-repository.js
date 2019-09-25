'use strict'
var Employee = require('../models/employee');
db = require('../repositories/database');

exports.insert = async (data) => {
    const model = await Employee.create({
        fun_cid_n_id: data.city,
        fun_grp_n_id: data.group,
        fun_s_nome: data.name,
        fun_s_endereco: data.adress,
        fun_s_bairro: data.neighborhood,
        fun_s_cep: data.zipCode,
        fun_s_telefone: data.phone,
        fun_s_celular: data.cellPhone,
        fun_s_cpf: data.cpf,
        fun_d_admissao: data.admission,
        fun_d_demissao: data.demission,
        fun_b_ativo: data.active,
        fun_b_assalariado: data.salaried,
        fun_n_salario: data.salary,
        fun_s_funcao: data.office,
        fun_s_cro: data.cro,
        fun_s_email: data.mail,
        fun_s_rg: data.rg
    });
    return model;
}

exports.updated = async (data) => {
    const model = await Employee.update({
        fun_n_id: data.id,
        fun_cid_n_id: data.city,
        fun_grp_n_id: data.group,
        fun_s_nome: data.name,
        fun_s_endereco: data.adress,
        fun_s_bairro: data.neighborhood,
        fun_s_cep: data.zipCode,
        fun_s_telefone: data.phone,
        fun_s_celular: data.cellPhone,
        fun_s_cpf: data.cpf,
        fun_d_admissao: data.admission,
        fun_d_demissao: data.demission,
        fun_b_ativo: data.active,
        fun_b_assalariado: data.salaried,
        fun_n_salario: data.salary,
        fun_s_funcao: data.office,
        fun_s_cro: data.cro,
        fun_s_email: data.mail,
        fun_s_rg: data.rg
    });
    return model;
}

exports.getById = async (id) => {
    let model = await Employee.findOne({
        where: {
            'fun_n_id': id
        }
    });
    return model;
}
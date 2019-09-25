'use strict'
var DataTypes = require('sequelize');
var db = require('../repositories/database');

var Dentist = db.define('dentist',
    {
        det_n_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        det_cid_n_id: { type: DataTypes.INTEGER, required: true },
        det_grp_n_id: { type: DataTypes.INTEGER, required: true },
        det_s_nome: { type: DataTypes.STRING, required: false },
        det_s_cpf: { type: DataTypes.STRING, required: false },
        det_s_cnpj: { type: DataTypes.STRING, required: false },
        det_s_contato: { type: DataTypes.STRING, required: true },
        det_s_endereco: { type: DataTypes.STRING, required: true },
        det_s_bairro: { type: DataTypes.STRING, required: true },
        det_s_cep: { type: DataTypes.STRING, required: true },
        det_s_cro: { type: DataTypes.STRING, required: false },
        det_s_telefone: { type: DataTypes.STRING, required: false },
        det_s_celular: { type: DataTypes.STRING, required: false },
        det_s_email: { type: DataTypes.STRING, required: false },
        det_s_observacao: { type: DataTypes.STRING, required: false },
        det_s_nome_clinica: { type: DataTypes.STRING, required: false },
        det_s_tipo_det: { type: DataTypes.STRING, required: false },
        det_s_rg: { type: DataTypes.STRING, required: false },
        det_s_ie: { type: DataTypes.STRING, required: false },
        det_b_ativo: { type: DataTypes.BOOLEAN, required: true }        
    },
    {
        tableName: 'lab_det_dentista',
        timestamps: false
    }
);

module.exports = Dentist;
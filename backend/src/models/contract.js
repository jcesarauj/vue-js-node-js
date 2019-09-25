'use strict'
var DataTypes = require('sequelize');
var db = require('../repositories/database');

var Contract = db.define('contract',
    {
        con_n_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        con_cid_n_id: { type: DataTypes.INTEGER, required: true },
        con_grp_n_id: { type: DataTypes.INTEGER, required: true },
        con_s_nome: { type: DataTypes.STRING, required: false },
        con_s_razao_social: { type: DataTypes.STRING, required: false },
        con_s_cpfcnpj: { type: DataTypes.STRING, required: true },
        con_s_ierg: { type: DataTypes.STRING, required: true },
        con_s_endereco: { type: DataTypes.STRING, required: true },
        con_s_bairro: { type: DataTypes.STRING, required: true },
        con_s_cep: { type: DataTypes.STRING, required: true },
        con_b_juridico: { type: DataTypes.BOOLEAN, required: true },
        con_b_ativo: { type: DataTypes.BOOLEAN, required: true },
        con_b_exibir_site: { type: DataTypes.BOOLEAN, required: true }
    },
    {
        tableName: 'lab_con_contrato',
        timestamps: false
    }
);

module.exports = Contract;
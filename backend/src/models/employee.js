'use strict'
var DataTypes = require('sequelize');
var db = require('../repositories/database');

var Employee = db.define('employee',
    {
        fun_n_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        fun_cid_n_id: { type: DataTypes.INTEGER, required: true },
        fun_grp_n_id: { type: DataTypes.INTEGER, required: true },
        fun_s_nome: { type: DataTypes.STRING, required: true },
        fun_s_endereco: { type: DataTypes.STRING, required: true },
        fun_s_bairro: { type: DataTypes.STRING, required: true },
        fun_s_cep: { type: DataTypes.STRING, required: true },
        fun_s_telefone: { type: DataTypes.STRING, required: false },
        fun_s_celular: { type: DataTypes.STRING, required: false },
        fun_s_cpf: { type: DataTypes.STRING, required: true },
        fun_d_admissao: { type: DataTypes.DATE, required: true },
        fun_d_demissao: { type: DataTypes.DATE, required: false },
        fun_b_ativo: { type: DataTypes.BOOLEAN, required: true } ,
        fun_b_assalariado: { type: DataTypes.BOOLEAN, required: true } ,
        fun_n_salario: { type: DataTypes["DOUBLE PRECISION"], required: false } ,
        fun_s_funcao: { type: DataTypes.STRING, required: true } ,
        fun_s_cro: { type: DataTypes.STRING, required: false } ,
        fun_s_email: { type: DataTypes.STRING, required: false },
        fun_s_rg: { type: DataTypes.STRING, required: false } 
    },
    {
        tableName: 'lab_fun_funcionario',
        timestamps: false
    }
);

module.exports = Employee;
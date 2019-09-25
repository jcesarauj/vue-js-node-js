'use strict'
var DataTypes = require('sequelize');
var db = require('../repositories/database');

var Permission = db.define('permission',
    {
        per_n_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        per_grp_n_id: { type: DataTypes.INTEGER, required: false },        
        per_s_nome: { type: DataTypes.STRING, required: true },
        per_b_cadastrar: { type: DataTypes.BOOLEAN, required: true },
        per_b_alterar: { type: DataTypes.BOOLEAN, required: true },
        per_b_deletar: { type: DataTypes.BOOLEAN, required: true },
        per_b_ativo: { type: DataTypes.BOOLEAN, required: true }
    },
    {
        tableName: 'fwc_per_permissao',
        timestamps: false
    }
);

module.exports = Permission;
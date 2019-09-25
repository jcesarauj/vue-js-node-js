'use strict'
var DataTypes = require('sequelize');
var db = require('../repositories/database');

var TableService = db.define('tableService',
    {
        tas_n_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        tas_grp_n_id: { type: DataTypes.INTEGER, required: true },        
        tas_s_descricao: { type: DataTypes.STRING, required: true },
        tas_b_ativo: { type: DataTypes.BOOLEAN, required: true },
        tas_grd_n_id: { type: DataTypes.INTEGER, required: false },    
    },
    {
        tableName: 'lab_tas_tabela_servico',
        timestamps: false
    }
);

module.exports = TableService;
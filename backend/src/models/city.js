'use strict'
var DataTypes = require('sequelize');
var db = require('../repositories/database');

var City = db.define('city',
    {
        cid_n_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        cid_est_n_id: { type: DataTypes.INTEGER, required: true },        
        cid_s_nome: { type: DataTypes.STRING, required: true },
        cid_b_ativo: { type: DataTypes.BOOLEAN, required: true },
        cid_s_cod_ibge: { type: DataTypes.STRING, required: false },    
    },
    {
        tableName: 'fwc_cid_cidade',
        timestamps: false
    }
);

module.exports = City;
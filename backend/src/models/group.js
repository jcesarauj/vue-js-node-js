'use strict'
var DataTypes = require('sequelize');
var db = require('../repositories/database');

var Group = db.define('city',
    {
        grp_n_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        grp_grp_n_id: { type: DataTypes.INTEGER, required: false },        
        grp_s_nome: { type: DataTypes.STRING, required: true },
        grp_b_ativo: { type: DataTypes.BOOLEAN, required: true },
        grp_d_data_validade: { type: DataTypes.DATE, required: true },  
        grp_ver_n_id: { type: DataTypes.INTEGER, required: false }  
    },
    {
        tableName: 'fwc_grp_grupo',
        timestamps: false
    }
);

module.exports = Group;
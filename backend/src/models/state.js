'use strict'
var DataTypes = require('sequelize');
var db = require('../repositories/database');

var State = db.define('state',
    {
        est_n_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        est_pai_n_id: { type: DataTypes.INTEGER, required: true },
        est_s_sigla: { type: DataTypes.STRING, required: true },
        est_s_nome: { type: DataTypes.STRING, required: true },
        est_b_ativo: { type: DataTypes.BOOLEAN, required: true }        
    },
    {
        tableName: 'fwc_est_estado',
        timestamps: false
    }
);

module.exports = State;
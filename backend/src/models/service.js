'use strict'
var DataTypes = require('sequelize');
var db = require('../repositories/database');

var Service = db.define('Service',
    {
        ser_n_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        ser_grp_n_id: { type: DataTypes.INTEGER, required: true },        
        ser_tas_n_id: { type: DataTypes.INTEGER, required: true },
        ser_s_descricao: { type: DataTypes.STRING, required: true },
        ser_n_valor: { type: DataTypes["DOUBLE PRECISION"], required: true },
        ser_s_codigo: { type: DataTypes.STRING, required: true },
        ser_s_descricao_servico: { type: DataTypes.STRING, required: true },
        ser_b_ativo: { type: DataTypes.BOOLEAN, required: true }   
    },
    {
        tableName: 'lab_ser_servico',
        timestamps: false
    }
);

module.exports = Service;
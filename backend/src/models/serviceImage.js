'use strict'
var DataTypes = require('sequelize');
var db = require('../repositories/database');

var ServiceImage = db.define('serviceImage',
    {
        sim_n_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        sim_grp_n_id: { type: DataTypes.INTEGER, required: true },        
        sim_ser_n_id: { type: DataTypes.INTEGER, required: true },
        sim_s_descricao: { type: DataTypes.STRING, required: true },
        sim_b_capa: { type: DataTypes.BOOLEAN, required: true },
        sim_b_ativo: { type: DataTypes.BOOLEAN, required: true }
    },
    {
        tableName: 'lab_sim_servico_imagem',
        timestamps: false
    }
);

module.exports = ServiceImage;
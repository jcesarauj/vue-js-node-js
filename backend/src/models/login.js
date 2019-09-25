'use strict'
var DataTypes = require('sequelize');
var db = require('../repositories/database');

var Login = db.define('login',
    {
        log_n_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        log_det_n_id: { type: DataTypes.INTEGER, required: true },
        log_per_n_id: { type: DataTypes.INTEGER, required: true },
        log_lin_n_id: { type: DataTypes.INTEGER, required: true },
        log_grp_n_id: { type: DataTypes.INTEGER, required: true },
        log_s_usuario: { type: DataTypes.STRING, required: true },
        log_s_nova_senha: { type: DataTypes.STRING, required: true },
        log_d_ultimo_acesso: { type: DataTypes.DATE, required: false },
        log_d_cadastro: { type: DataTypes.DATE, required: false },
        log_n_tipo_login: { type: DataTypes.INTEGER, required: true },
        log_b_ativo: { type: DataTypes.BOOLEAN, required: false }
    },
    {
        tableName: 'fwc_log_login',
        timestamps: false
    }
);

module.exports = Login;
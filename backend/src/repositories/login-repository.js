var Login = require('../models/login');
db = require('../repositories/database');

exports.authenticate = async (data) => {
    let login = await Login.findOne({
        where: {
            'log_s_usuario': data.user,
            'log_s_nova_senha': data.pass
        }
    });
    return login;
}

exports.getById = async (id) => {
    let login = await Login.findOne({
        where: {
            'log_n_id': id
        }
    });

    return login;
}

exports.insert = async (data) => {
    const model = await Login.create({
        log_det_n_id: data.dentist,
        log_per_n_id: data.permission,
        log_lin_n_id: 1, //portuguese
        log_grp_n_id: data.group,
        log_s_usuario: data.user,
        log_s_nova_senha: data.newPass,
        log_d_ultimo_acesso: data.lastAccess,
        log_d_cadastro: data.insertDate,
        log_n_tipo_login: data.loginType,
        log_b_ativo: data.active
    });
    return model;
}

exports.update = async (data) => {
    const model = await Login.update({
        log_n_id: data.id,
        log_det_n_id: data.dentist,
        log_per_n_id: data.permission,
        log_lin_n_id: 1, //portuguese
        log_grp_n_id: data.group,
        log_s_usuario: data.user,
        log_s_nova_senha: data.newPass,
        log_d_ultimo_acesso: data.lastAccess,
        log_d_cadastro: data.insertDate,
        log_n_tipo_login: data.loginType,
        log_b_ativo: data.active
    });
    return model;
}
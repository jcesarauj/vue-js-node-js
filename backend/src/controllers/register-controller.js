'use strict'

const groupRequest = require('../traffic/request/group-request');
const groupService = require('../services/group-service');
const permissionRequest = require('../traffic/request/permission-request');
const permissionService = require('../services/permission-service');
const contractRequest = require('../traffic/request/contract-request');
const contractService = require('../services/contract-service');
const loginRequest = require('../traffic/request/login-request');
const loginService = require('../services/login-service');
const dentistRequest = require('../traffic/request/dentist-request');
const dentistService = require('../services/dentist-service');
const employeeRequest = require('../traffic/request/employee-request');
const employeeService = require('../services/employee-service');
const mailService = require('../services/mail-service');
const httpStatus = require('http-status-codes');
const md5 = require('md5');

exports.get = (req, res, next) => {
    res.status(httpStatus.OK).send(req.body);
}

exports.post = async (req, res, next) => {
    let now = new Date();
    let validDate = new Date(now.getFullYear(), now.getMonth(), now.getDay() + 15, 23, 59, 59);
    let name = (req.body.legalPerson == true ? req.body.socialName : req.body.name);
    let cpfCnpj = (req.body.legalPerson == true ? req.body.cnpj : req.body.cpf);
    let rgIe = (req.body.legalPerson == true ? req.body.ie : req.body.rg);

    let requestGroup = new groupRequest(0, name, validDate, true);
    const group = await groupService.save(requestGroup);

    let requestPermission = new permissionRequest(0, name, true, true, true, true, group.grp_n_id);
    const permission = await permissionService.save(requestPermission);

    //LAB
    if (req.body.personType == 1) {
        let requestContract = new contractRequest(0, req.body.city, group.grp_n_id, req.body.name,
            req.body.socialName, cpfCnpj, rgIe, req.body.address, req.body.neighborhood, req.body.zipCode,
            req.body.legalPerson, true, req.body.descodonto);
        const contract = await contractService.save(requestContract);
    }
    else if (req.body.personType == 2)//DENTISTA
    {
        let requestDentist = new dentistRequest(0, req.body.city, group.grp_n_id, req.body.name,
            req.body.socialName, req.body.cpf, req.body.cnpj, req.body.contact,
            req.body.rg, req.body.ie, req.body.address, req.body.neighborhood, req.body.zipCode,
            req.body.cro, req.body.phone, req.body.cellPhone, req.body.mail, req.body.observation,
            true, req.body.legalPerson);
        const dentist = await dentistService.save(requestDentist);
    }
    else if (req.body.personType == 3)//FUNCIONÁRIO
    {
        let requestEmployee = new employeeRequest(0, req.body.city, group.grp_n_id, req.body.name,
            req.body.address, req.body.neighborhood, req.body.zipCode, req.body.phone,
            req.body.cellPhone, req.body.cpf, req.body.rg, req.body.admission, req.body.demission,
            true, req.body.salaried, req.body.salary, req.body.office, req.body.cro, req.body.mail);
        const employee = await employeeService.save(requestEmployee);
    }

    let requestLogin = new loginRequest(0, null, permission.per_n_id, group.grp_n_id,
        req.body.user, md5(req.body.pass + global.SALT_KEY), null, null, req.body.personType, true);

    const login = await loginService.save(requestLogin);

    //Enviar e-mail
    mailService.sendMail(req.body.mail, 'Seja bem vindo a WTI',
        global.WELCOME_TEMPLATE.replace('{0}', name).replace('{1}', req.body.user)
            .replace('{2}', req.body.pass));

    res.status(httpStatus.OK).send(req.body);
}
'use strict'

class dentitsRequest {
    constructor(id, city, group, name, clinicName, cpf, cnpj, contact, rg, ie, adress, neighborhood,
        zipCode, cro, phone, cellPhone, mail, observation, active) {
        this.id = id;
        this.city = city;
        this.group = group;
        this.name = name;
        this.clinicName = clinicName;
        this.cpf = cpf;
        this.cnpj = cnpj;
        this.contact = contact;
        this.rg = rg;
        this.ie = ie;
        this.adress = adress;
        this.neighborhood = neighborhood;
        this.zipCode = zipCode;
        this.cro = cro;
        this.phone = phone;
        this.cellPhone = cellPhone;
        this.mail = mail;
        this.observation = observation;
        this.active = active;
        this.type = '1'; //dentista
    }
}

module.exports = dentitsRequest
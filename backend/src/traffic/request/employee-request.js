'use strict'

class employeeRequest {
    constructor(id, city, group, name, adress, neighborhood,
        zipCode, phone, cellPhone, cpf, rg, admission, demission, active, salaried, salary,
        office, cro, mail) {
        this.id = id;
        this.city = city;
        this.group = group;
        this.name = name;
        this.adress = adress;
        this.neighborhood = neighborhood;
        this.zipCode = zipCode;
        this.phone = phone;
        this.cellPhone = cellPhone;
        this.cpf = cpf;
        this.rg = rg;
        this.admission = admission;
        this.demission = demission;
        this.active = active;
        this.salaried = salaried;
        this.salary = salary;
        this.function = office;
        this.cro = cro;
        this.mail = mail;
    }
}

module.exports = employeeRequest
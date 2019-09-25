'use strict'

class contractRequest {
    constructor(id, city, group, name, socialName, cpfCnpj, rgIe, adress, neighborhood, zipCode, 
        isLegalPerson, active, isShowSite) {
        this.id = id;
        this.city = city;
        this.group =  group;
        this.name = name;
        this.socialName = socialName;
        this.cpfCnpj = cpfCnpj;
        this.rgIe = rgIe;
        this.adress = adress;
        this.neighborhood = neighborhood;
        this.zipCode = zipCode;
        this.isLegalPerson = isLegalPerson;
        this.active =  active;        
        this.isShowSite = isShowSite;
    }
}

module.exports = contractRequest
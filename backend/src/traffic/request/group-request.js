'use strict'

class groupRequest {
    constructor(id, name, validDate, active) {
        this.id = id;
        this.name = name;
        this.validDate = validDate;
        this.active =  active;
    }
}

module.exports = groupRequest
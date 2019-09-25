'use strict'

class loginResponse {
    constructor(id, user, active) {
        this.id = id;
        this.user = user;
        this.active = active;
        this.roles =  ['user']
    }
}

module.exports = loginResponse
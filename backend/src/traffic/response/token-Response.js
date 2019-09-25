'use strict'

class tokenResponse {
    constructor(token, user, active) {
        this.access_token = token;
        this.user = user;
        this.active= active
    }
}

module.exports = tokenResponse
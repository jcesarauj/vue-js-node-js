'use strict'
class loginRequest {
    constructor(id, dentist, permission, group, user, newPass, lastAccess,
         created, loginType, active) {
        this.id = id;
        this.dentist = dentist;
        this.permission = permission;
        this.language = 1;
        this.group =  group;
        this.user = user;
        this.newPass = newPass;
        this.lastAccess = lastAccess;
        this.created = created;
        this.loginType = loginType;
        this.active =  active;        
    }
}
module.exports = loginRequest
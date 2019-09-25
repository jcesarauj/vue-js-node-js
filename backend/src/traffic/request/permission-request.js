'use strict'

class permissionRequest {
    constructor(id, name, include, alter, exclude, active, group) {
        this.id = id;
        this.name = name;
        this.include = include;
        this.alter =  alter;
        this.exclude =  exclude;
        this.active =  active;
        this.group =  group;
    }
}

module.exports = permissionRequest
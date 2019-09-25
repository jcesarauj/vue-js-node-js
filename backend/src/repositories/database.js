'use strict';

var Sequelize = require('sequelize');

module.exports = new Sequelize(global.DATABASE_CONECT.name, global.DATABASE_CONECT.user, 
    global.DATABASE_CONECT.password,
    global.DATABASE_DETAILS);
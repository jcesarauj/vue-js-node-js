'use strict'

const index = require('./index-route')
const authenticateRoute = require('./authenticate-route')
const registerRoute = require('./register-route')
const configurationRoute = require('./configuration-route')
const cityRoute = require('./city-route')

module.exports = (app) => {
    app.use('/', index)
    app.use('/api/authenticate/v1', authenticateRoute) 
    app.use('/api/register/v1', registerRoute) 
    app.use('/api/configuration/v1', configurationRoute)
    app.use('/api/city/v1', cityRoute) 
}
'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/city-controller')
const authService = require('../services/auth-service')

router.get('/', authService.authorize, controller.get)

module.exports = router
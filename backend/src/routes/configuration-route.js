'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/configuration-controller')
const authService = require('../services/auth-service')

router.get('/', authService.isAdmin, controller.get)
router.post('/', authService.isAdmin, controller.post)

module.exports = router
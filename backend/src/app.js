'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const config = require('../bin/config');
const cors = require('../bin/cors');
const node = require('../bin/node');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors.enableCors);

app.set('port', node.normalizePort(process.env.PORT || '3000'));
app.on('error', node.onError);
app.on('listening', node.onListening);

const routes = require('../src/routes/index')(app);
module.exports = app
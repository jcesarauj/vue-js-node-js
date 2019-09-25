const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');
const server = http.createServer(app);
const port = app.get('port');

server.listen(port, function () {
    console.log(`BACKEND IS RUNNING ON ${port}`);
})
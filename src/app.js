const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const config = require('./lib/config')
const routes = require('./app/appRoutes')
require('dotenv').config()

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/', routes)

server.listen(config.port, () => {
    console.log(`Server Running On ${config.port}`)
})
const config = require('../config')
const sequelize = require('sequelize')
const connections = new sequelize(config.dbName, config.dbUsername, config.dbPassword, {
    host: config.dbHost,
    dialect: config.dbDialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false,
})
module.exports = connections
const sequelize = require('sequelize')
const db = require('../lib/appMySQL/index')
const config = require('../lib/config')

const userTable = db.define(config.usersTable, {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    username: {
        type: sequelize.STRING,
    },
    email: {
        type: sequelize.STRING,
    },
    password: {
        type: sequelize.STRING,
    },
}, { freezeTableName: true, timestamps: false })

module.exports = userTable
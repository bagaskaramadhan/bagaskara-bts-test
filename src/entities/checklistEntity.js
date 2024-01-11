const sequelize = require('sequelize')
const db = require('../lib/appMySQL/index')
const config = require('../lib/config')

const checklistTable = db.define(config.checklistTable, {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
    },
}, { freezeTableName: true, timestamps: false })

module.exports = checklistTable
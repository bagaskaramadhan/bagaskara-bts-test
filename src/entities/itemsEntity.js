const sequelize = require('sequelize')
const db = require('../lib/appMySQL/index')
const config = require('../lib/config')

const itemsTable = db.define(config.itemsTable, {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    checklistId: {
        type: sequelize.INTEGER,
        field: "checklist_id"
    },
    itemName: {
        type: sequelize.STRING,
        field: "item_name"
    },
}, { freezeTableName: true, timestamps: false })

module.exports = itemsTable
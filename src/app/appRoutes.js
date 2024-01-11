const express = require('express')
const { GetAllChecklist } = require('./allRoutes/get/getAllChecklist')
const { PostCreateChecklist } = require('./allRoutes/post/createNewChecklist')
const { DeleteChecklistByID } = require('./allRoutes/delete/deleteChecklistById')
const { PostRegister } = require('./allRoutes/post/postRegister')
const { PostLogin } = require('./allRoutes/post/postLogin')
const { PostItemInChecklist } = require('./allRoutes/post/postItemInChecklist')
const { verifyToken } = require('../helper/aunthenticateToken')
const { GetAllChecklistItemByChecklistId } = require('./allRoutes/get/getAllChecklistItemsByChecklistId')
const route = express.Router()

route
    // GET
    .get("/checklist", verifyToken, GetAllChecklist)
    .get("/checklist/:checklistId/item", GetAllChecklistItemByChecklistId)
    // POST
    .post("/checklist", verifyToken, PostCreateChecklist)
    .post("/register", PostRegister)
    .post("/login", PostLogin)
    .post("/checklist/:checklistId/item", verifyToken, PostItemInChecklist)
    // DELETE
    .delete("/checklist/:checklistId", verifyToken, DeleteChecklistByID)

module.exports = route
const express = require('express')
const { GetAllChecklist } = require('./allRoutes/get/getAllChecklist')
const { PostCreateChecklist } = require('./allRoutes/post/createNewChecklist')
const { DeleteChecklistByID } = require('./allRoutes/delete/deleteChecklistById')
const { PostRegister } = require('./allRoutes/post/postRegister')
const { PostLogin } = require('./allRoutes/post/postLogin')
const { verifyToken } = require('../helper/aunthenticateToken')
const route = express.Router()

route
    // GET
    .get("/checklist", verifyToken, GetAllChecklist)
    // POST
    .post("/checklist", verifyToken, PostCreateChecklist)
    .post("/register", PostRegister)
    .post("/login", PostLogin)
    // DELETE
    .delete("/checklist/:checklistId", verifyToken, DeleteChecklistByID)

module.exports = route
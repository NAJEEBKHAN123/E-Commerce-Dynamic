const express = require("express");
const { addUser, getUsers, getUser, login } = require("../Controller/Auth/userController");
const {verifyUser} = require('../MiddleWare/authMiddleWare')

const router = express.Router();
 
router.post('/addUser', addUser)
router.get('/getUsers',verifyUser, getUsers)
router.get('/getUser/:id', getUser)
router.post('/login', login)

module.exports = router






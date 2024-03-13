const express = require('express')
const { userController } = require('../controllers')
const { autheticate, restrict } = require('../middleware/auth')
const route = express.Router()


route.post('/register',userController.register)
route.post('/login',userController.login)
route.get('/profile',autheticate,restrict(['admin','user']),userController.getProfile)
route.get('/user',autheticate,userController.getProfile)
route.delete("/usersdelete/:userId", autheticate, userController.usersdelete);

module.exports = route
const express = require('express')
const userRegister = require('../controllers/register.controller')
const userLogin = require('../controllers/login.controllers')

const userRouter = express.Router()

userRouter.post('/register', userRegister )
userRouter.post('/login', userLogin)

module.exports = userRouter
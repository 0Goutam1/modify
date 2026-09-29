const express = require("express")
const authRoutes= express.Router()
const authController= require("../controller/auth.Controller")
const { verify } = require("jsonwebtoken")


authRoutes.post('/register',authController. registerController)

authRoutes.post('/login',authController.loginController)

authRoutes.post ('/logout',authController.logoutController)

authRoutes.get('/getMe',verify,authController.getMeController)



module.exports = authRoutes
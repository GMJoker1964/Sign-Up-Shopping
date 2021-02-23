const express =require('express')

const authModule = require('../modules/auth')
const authRouter = new express.Router()

authRouter.post('/sign-in',authModule.signIn);
authRouter.post('/sign-up', authModule.signUpUser);
authRouter.post('/sign-up-admin',authModule.signUpAdmin);

module.exports =authRouter
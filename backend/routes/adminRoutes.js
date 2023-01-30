const router = require('express').Router()
const { authRegister, authLogin, testAuth } = require('../controller/adminController')




    router.post('/register',authRegister)
    router.post('/login',authLogin)
    
module.exports = router
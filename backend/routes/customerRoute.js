

const router = require('express').Router()
const { createCustomer, customerLogin, getAllCustomer } = require('../controller/customerController')
    router.post('/create-user',createCustomer) 
    router.post('/login',customerLogin)
    router.get('/customers',getAllCustomer)
module.exports = router
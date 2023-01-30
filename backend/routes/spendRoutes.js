

const router = require('express').Router()
const { createSpend } = require('../controller/spendController')
const { isAuthenticated } = require('../middlewares/auth')
    router.post('/create',isAuthenticated,createSpend)
module.exports = router
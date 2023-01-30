const { totalEarn } = require('../controller/totalEarn')

const router = require('express').Router()

    router.get('/earn',totalEarn)
module.exports = router
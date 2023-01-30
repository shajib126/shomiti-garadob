const { createDeposit, getAllDeposite, getDepositeByUserId } = require('../controller/deposit')

const router = require('express').Router()
    router.post('/create/:id',createDeposit)
    router.get('/all',getAllDeposite)
    router.get('/:id',getDepositeByUserId)
module.exports = router
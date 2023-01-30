const router = require('express').Router()
const { payKisti, getAllKisti, getSingleKisti } = require('../controller/kistiController')

    router.post('/paykisti/:id',payKisti)
    router.get('/',getAllKisti)
    router.get('/:id',getSingleKisti)

module.exports = router
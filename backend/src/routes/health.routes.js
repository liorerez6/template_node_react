const express = require('express')
const router = express.Router()
const { ping, echo } = require('../controllers/health.controller')

router.get('/ping', ping)
router.post('/echo', echo)

module.exports = router

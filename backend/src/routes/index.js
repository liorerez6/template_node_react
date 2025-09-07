const express = require('express')
const router = express.Router()

const healthRoutes = require('./health.routes')

// כל ה-API תחת /api
router.use('/health', healthRoutes)

module.exports = router

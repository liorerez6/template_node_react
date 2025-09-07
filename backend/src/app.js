require('dotenv').config()
const express = require('express')
const cors = require('cors')

const routes = require('./routes')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

// Middlewares
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

// Routes
app.use('/api', routes)

// 404 + Error
app.use(notFound)
app.use(errorHandler)

module.exports = app

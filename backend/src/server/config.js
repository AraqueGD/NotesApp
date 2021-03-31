// Import Dependences Settings
const express = require('express')
const cors = require('cors')

// Import Routes
const router = require('../routes/routes')

const config = (app) => {
    // Settings
    app.set('port', process.env.PORT || 5000)

    // Middlewares
    app.use(express.json())
    app.use(cors())

    // Routes
    router(app)

    return app
}

module.exports = config

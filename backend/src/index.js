// Express Framework Express Create Server
const express = require('express')

// Import Env Variables
require('dotenv').config()

// Config File Server
const config = require('./server/config')

// Connect DB
require('./db')

const app = config(express())

//Listen Server
async function main() {
    await app.listen(app.get('port'))
    console.log(`Server Connected http://localhost:${app.get('port')}`)
}

// Server Start
main()

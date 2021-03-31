// Import Networking API
const users = require('../components/users/network')
const notes = require('../components/notes/network')

const router = (server) => {
    server.use('/api/users', users)
    server.use('/api/notes', notes)
}

module.exports = router

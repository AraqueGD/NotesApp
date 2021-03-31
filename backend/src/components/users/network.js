const express = require('express')
const router = express.Router()

// Response
const {success, errorResponse} = require('../../routes/response')

// Controllers API
const controller = require('./controller')

router.get('/', (req, res) => {
    controller.getUsers().then(users => {
        success(req, res, users, 200)
        res.json(users)
    }).catch(err => {
        errorResponse(req, res, 'Error Interno', 500, err)
    })
})

router.get('/:id', (req, res) => {
    controller.getUser(req.params.id).then(user => {
        success(req, res, user, 200)
        res.json(user)
    }).catch(err => {
        errorResponse(req, res, 'Error Interno', 500, err)
    })
})

router.post('/', (req, res) => {
    const {username} = req.body
    controller.createUser(username)
    res.json({message: 'User Created'})
})

router.delete('/:id', (req, res) => {
    controller.deleteUser(req.params.id)
    res.json({message: 'User Deleted'})
})

module.exports = router

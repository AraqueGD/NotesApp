const express = require('express')
const router = express.Router()

// Response
const {success, errorResponse} = require('../../routes/response')

// Controllers
const controller = require('./controller')

router.get('/', (req, res) => {
    controller.getNotes().then(notes => {
        success(req, res, notes, 200)
        res.json(notes)
    }).catch(err => {
        errorResponse(req, res, 'Error Interno', 500, err)
    })
})

router.get('/:id', (req, res) => {
    controller.getNote(req.params.id).then(note => {
        success(req, res, note, 200)
        res.json(note)
    }).catch(err => {
        errorResponse(req, res, 'Error Interno', 500, err)
    })
})

router.post('/', (req, res) => {
    const {title, content, author} = req.body
    const note = controller.createNote(title, content, author)
    res.json({save: note})
})

router.put('/:id', (req, res) => {
    controller.updateNote(req.params.id, req.body)
    res.json({message: 'Message Update'})
})

router.delete('/:id', (req, res) => {
    controller.deleteNote(req.params.id)
    res.json({message: 'Menssage Delete'})
})

module.exports = router

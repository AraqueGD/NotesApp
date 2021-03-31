const mongoose = require('mongoose')
const { Schema, model } = mongoose

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        require: true
    },
    author: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Note', noteSchema)

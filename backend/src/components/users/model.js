const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Users', userSchema)

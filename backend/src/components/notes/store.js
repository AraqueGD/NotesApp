const modelNotes = require('./model')

const getNotes = async () => {
    const notes = await modelNotes.find()
    return notes
}

const getNote = async (id) => {
    const note = await modelNotes.findById(id)
    return note
}

const createNote = async (fullNote) => {
    const fullnote = new modelNotes(fullNote)
    await fullnote.save()
    return fullNote
}

const updateNote = async (id, fullNote) => {
    await modelNotes.findOneAndUpdate({_id: id}, fullNote)
}

const deleteNote = async (id) => {
    await modelNotes.findByIdAndDelete(id)
}

module.exports = {
    get: getNotes,
    oneNote: getNote,
    add: createNote,
    update: updateNote,
    remove: deleteNote
}

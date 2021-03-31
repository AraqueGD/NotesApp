const {get, addUser, removeUser, oneUser} = require('./store')

const getUsers = () => {
    return new Promise((resolve, reject) => {
        resolve(get())
    })
}

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('No existe este ID')
            return false
        }
        resolve(oneUser(id))
    })
}

const createUser = (username) => {
    addUser(username)
    return username
} 

const deleteUser = (id) => {
    removeUser(id)
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    getUser
}

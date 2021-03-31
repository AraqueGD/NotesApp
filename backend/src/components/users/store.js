const modelUsers = require('./model')

const getUsers = async () => {
    const users = await modelUsers.find()
    return users
}

const getUser = async (id) => {
    const user = await modelUsers.findById(id)
    return user
}

const addUser = async (username) => {
    const newUser = new modelUsers({username})
    await newUser.save()
    return newUser
}

const deleteUser = async (id) => {
    await modelUsers.findByIdAndDelete(id)
}

module.exports = {
    get: getUsers,
    addUser,
    removeUser: deleteUser,
    oneUser: getUser
}

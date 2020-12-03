const User = require('../models/user')

module.exports.create = async function(user) {
    try {
        return await User.create(user)
    } catch(error) {
        throw error
    }
}

module.exports.getByToken = async function (token) {
    try {
        return await User.find({'auth.token': token})
    } catch (error) {
        throw error
    }
}
const User = require('../models/user')

module.exports.create = async function(user) {
    try {
        return await User.create(user)
    } catch(error) {
        throw error
    }
}
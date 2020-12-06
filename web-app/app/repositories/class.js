const Class = require('../models/class')

module.exports.get = async function(filter) {
    try {
       return await Class.find(filter)
    } catch(error) {
        throw error
    }
}

module.exports.deleteById = async function(author, id) {
    try {
        return await Class.deleteOne({ '_id': id, 'author': author })
    } catch(error) {
        throw error
    }
}
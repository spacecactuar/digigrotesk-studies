const Subject = require('../models/subject')

module.exports.get = async function(filter) {
    try {
        return await Subject.find(filter)
    } catch(error) {
        throw error
    }
}

module.exports.deleteById = async function(author, id) {
    try {
        return await Subject.deleteOne({ '_id': id, 'author': author })
    } catch(error) {
        throw error
    }
}
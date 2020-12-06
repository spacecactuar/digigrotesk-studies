const Task = require('../models/task')

module.exports.get = async function(filter) {
    try {
        return await Task.find(filter)
    } catch(error) {
        throw error
    }
}

module.exports.deleteById = async function(author, id) {
    try {
        return await Task.deleteOne({ '_id': id, 'author': author })
    } catch(error) {
        throw error
    }
}
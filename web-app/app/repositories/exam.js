const Exam = require('../models/exam')

module.exports.get = async function(filter) {
    try {
        return await Exam.find(filter)
    } catch(error) {
        throw error
    }
}

module.exports.deleteById = async function(author, id) {
    try {
        return await Exam.deleteOne({ '_id': id, 'author': author })
    } catch(error) {
        throw error
    }
}
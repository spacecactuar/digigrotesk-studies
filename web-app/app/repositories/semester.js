const Semester = require('../models/semester')

module.exports.create = async function(semester) {
    try {
        return await Semester.create(semester)
    } catch(error) {
        throw error
    }
}
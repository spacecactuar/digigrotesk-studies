const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    author: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('Semesters', schema)
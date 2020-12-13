const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: { type: String, required: true },
    teacher: String,
    school: String,
    author: { type: mongoose.Schema.Types.ObjectId, required: true },
    semester: { type: mongoose.Schema.Types.ObjectId, required: true },
    create: { type: Date, required: true },
    finalGrade: Number,
    grades: [{
        value: Number,
        weight: Number
    }]
})

module.exports = mongoose.model('Subjects', schema)
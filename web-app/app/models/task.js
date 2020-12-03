const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: { type: String, required: true },
    observation: String,
    deadline: { type: Date, required: true },
    subject: {
        id: { type: mongoose.Schema.Types.ObjectId, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, required: true }
    }
})

module.exports = mongoose.model('Tasks', schema)
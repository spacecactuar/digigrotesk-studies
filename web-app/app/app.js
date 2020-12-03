const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const indexRoute = require('./routes/index')
const userRoute = require('./routes/user')
const semesterRoute = require('./routes/semester')
const subjectRoute = require('./routes/subject')
const examRoute = require('./routes/exam')
const taskRoute = require('./routes/task')
const classRoute = require('./routes/class')

const app = express()
mongoose.connect('mongodb+srv://pedro:teste123456@qa.xrzgw.mongodb.net/QA?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute)
app.use('/user', userRoute)
app.use('/semester', semesterRoute)
app.use('/subject', subjectRoute)
app.use('/exam', examRoute)
app.use('/task', taskRoute)
app.use('/class', classRoute)

module.exports = app
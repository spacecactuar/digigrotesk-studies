const express = require('express')
const router = express.Router()
const middleware = require('../controllers/middleware')

router.all('/', middleware.authenticateByToken)
router.all('/*', middleware.authenticateByToken)

router.get('/', getAllExams)

router.get('/:id', getExam)

router.post('/', createExam)

router.put('/:id', updateExam)

router.delete('/:id', deleteExam)

module.exports = router

async function getAllExams(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function getExam(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function createExam(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function updateExam(req, res) {
    try {
        const id = req.params.id
        res.status(201).send({id: id, item: req.body})
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function deleteExam(req, res) {
    try {
        const id = req.params.id
        res.status(201).send({id: id, item: req.body})
    } catch(error) {
        res.status(500).send(error.message)
    }
}
const express = require('express')
const router = express.Router()
const middleware = require('../controllers/middleware')

router.all('/', middleware.authenticateByToken)

router.get('/', getAllSemesters)

router.get('/:id', getSemester)

router.post('/', createSemester)

router.put('/:id', updateSemester)

router.delete('/:id', deleteSemester)

module.exports = router

async function getAllSemesters(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function getSemester(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function createSemester(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function updateSemester(req, res) {
    try {
        const id = req.params.id
        res.status(201).send({id: id, item: req.body})
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function deleteSemester(req, res) {
    try {
        const id = req.params.id
        res.status(201).send({id: id, item: req.body})
    } catch(error) {
        res.status(500).send(error.message)
    }
}
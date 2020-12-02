const express = require('express')
const router = express.Router()

router.get('/', getAllSubsjects)

router.get('/:id', getSubsject)

router.post('/', createSubject)

router.put('/:id', updateSubject)

router.delete('/:id', deleteSubject)

module.exports = router

async function getAllSubsjects(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function getSubsject(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function createSubject(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function updateSubject(req, res) {
    try {
        const id = req.params.id
        res.status(201).send({id: id, item: req.body})
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function deleteSubject(req, res) {
    try {
        const id = req.params.id
        res.status(201).send({id: id, item: req.body})
    } catch(error) {
        res.status(500).send(error.message)
    }
}
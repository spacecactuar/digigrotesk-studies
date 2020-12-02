const express = require('express')
const router = express.Router()

router.get('/', getAllTasks)

router.get('/:id', getTask)

router.post('/', createTask)

router.put('/:id', updateTask)

router.delete('/:id', deleteTask)

module.exports = router

async function getAllTasks(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function getTask(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function createTask(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function updateTask(req, res) {
    try {
        const id = req.params.id
        res.status(201).send({id: id, item: req.body})
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function deleteTask(req, res) {
    try {
        const id = req.params.id
        res.status(201).send({id: id, item: req.body})
    } catch(error) {
        res.status(500).send(error.message)
    }
}
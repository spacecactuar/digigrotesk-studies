const express = require('express')
const router = express.Router()

router.post('/', createUser)

router.put('/:id', updateUser)

module.exports = router

async function createUser(req, res) {
    try {
        res.status(201).send(req.body)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function updateUser(req, res) {
    try {
        const id = req.params.id
        res.status(201).send({id: id, item: req.body})
    } catch(error) {
        res.status(500).send(error.message)
    }
}

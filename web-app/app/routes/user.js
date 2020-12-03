const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.post('/', createUser)

router.put('/:id', updateUser)

module.exports = router

async function createUser(req, res) {
    try {
        let user = req.body
        user = await userController.createUser(user)
        res.status(201).send({"email": user.email, "x-key-api": user.auth.key, "x-token-api": user.auth.token})
    } catch(error) {
        res.status(error.code || 500).send(error.message)
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

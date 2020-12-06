const express = require('express')
const router = express.Router()
const middleware = require('../controllers/middleware')
const subjectController = require('../controllers/subject')

router.all('/', middleware.authenticateByToken)
router.all('/*', middleware.authenticateByToken)

router.get('/', getAllSubsjects)

router.get('/:id', getSubsject)

router.post('/', createSubject)

router.put('/:id', updateSubject)

router.delete('/:id', deleteSubject)

module.exports = router

async function getAllSubsjects(req, res) {
    try {
        let subjects = await subjectController.getAllUserSubjects(req.user)
        res.status(200).send(subjects)
    } catch(error) {
        res.status(error.code || 500).send(error.message)
    }
}

async function getSubsject(req, res) {
    try {
        let user = req.user
        let id = req.params.id
        let subject = await subjectController.getUserSubject(user, id)
        res.status(201).send(subject)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function createSubject(req, res) {
    try {
        await subjectController.createSubject(req.user, req.body)
        res.status(201).send('Disciplina criada!')
    } catch(error) {
        res.status(error.code || 500).send(error.message)
    }
}

async function updateSubject(req, res) {
    try {
        let user = req.user
        let id = req.params.id
        let update = req.body
        await subjectController.updateSubject(user, id, update)
        res.status(200).send('Disciplina atualizada!')
    } catch(error) {
        res.status(error.code || 500).send(error.message)
    }
}

async function deleteSubject(req, res) {
    try {
        let user = req.user
        let id = req.params.id
        await subjectController.deleteSubject(user, id)
        res.status(200).send('Disciplina exlcuida!')
    } catch(error) {
        res.status(error.code || 500).send(error.message)
    }
}
const express = require('express')
const router = express.Router()
const middleware = require('../controllers/middleware')
const semesterController = require('../controllers/semester')

router.all('/', middleware.authenticateByToken)
router.all('/*', middleware.authenticateByToken)

router.get('/', getAllSemesters)

router.get('/:id', getSemester)

router.post('/', createSemester)

router.put('/:id', updateSemester)

router.delete('/:id', deleteSemester)

module.exports = router

async function getAllSemesters(req, res) {
    try {
        let semesters = await semesterController.getAllUserSemesters(req.user)
        res.status(200).send(semesters)
    } catch(error) {
        res.status(error.code || 500).send(error.message)
    }
}

async function getSemester(req, res) {
    try {
        let user = req.user
        let id = req.params.id
        let semester = await semesterController.getUserSemester(user, id)
        res.status(200).send(semester)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

async function createSemester(req, res) {
    try {
        await semesterController.createSemester(req.user, req.body)
        res.status(201).send('Período criado!')
    } catch(error) {
        res.status(error.code || 500).send(error.message)
    }
}

async function updateSemester(req, res) {
    try {
        let user = req.user
        let id = req.params.id
        let update = req.body
        await semesterController.updateSemester(user, id, update)
        res.status(201).send('Período atualizado!')
    } catch(error) {
        res.status(error.code || 500).send(error.message)
    }
}

async function deleteSemester(req, res) {
    try {
        let user = req.user
        let id = req.params.id
        await semesterController.deleteSemester(user, id)
        res.status(200).send('Período excluido!')
    } catch(error) {
        res.status(error.code || 500).send(error.message)
    }
}
const subjectRepository = require('../repositories/subject')
const semesterRepository = require('../repositories/semester')
const classController = require('./class')
const taskController = require('./task')
const examController = require('./exam')

async function createSubject(user, newSubject) {
    try {
        validateSubject(newSubject)

        let semester = await semesterRepository.getById(user._id, newSubject.semester)
        if (!semester) throw { code: 406, message: 'O período passado ao qual a disciplina vai pertencer não foi encontrado!' }

        let subject = newSubject
        subject.author = user._id
        subject.create = new Date()

        return subjectRepository.create(subject)
    } catch(error) {
        console.error(`[createSubject] Erro ao criar subject para o user ${user._id} - ${user.email}. ${error.message}`)
        throw error
    }
}
module.exports.createSubject = createSubject

function validateSubject(subject) {
    try {
        if (!subject || Object.keys(subject) == 0) throw { code: 400, message: 'É obrigatório passar uma disciplina para ser salva!' }
        if (!subject.name) throw { code: 400, message: 'É obrigatório passar um(a) nome/identificação para a disciplina que será salva!' }
        if (!subject.semester) throw { code: 400, message: 'É obrigatório passar a qual período esta disciplina vai pertencer!' }
    } catch(error) {
        throw error
    }
}

async function getAllUserSubjects(user) {
    try {
        let subjects = await subjectRepository.get({ 'author': user._id })
        return subjects
    } catch(error) {
        console.error(`[getAllUserSubjects] Erro ao buscar subjects do user ${user._id} - ${user.email}`)
        throw { code: 500, message: 'Erro interno do servidor' }
    }
}
module.exports.getAllUserSubjects = getAllUserSubjects

async function getUserSubject(user, id) {
    try {
        if (!id) throw { code: 400, message: 'É obrigatório passar um id na requisição para buscar uma disciplina específica!' }

        let subject = await subjectRepository.getById(user._id, id)
        return subject
    } catch(error) {
        console.error(`[getUserSubject] Erro ao buscar subject do user ${user._id} - ${user.email}. ${error.message}`)
        if (error.code) throw error
        throw { code: 500, message: 'Erro interno do servidor' }
    }
}
module.exports.getUserSubject = getUserSubject

async function deleteSubject(user, subjectId, semesterId) {
    try {
        let filter = {
            author: user._id
        }

        if (subjectId)
            filter['_id'] = subjectId
        if (semesterId)
                filter.semester = semesterId

        let subjects = await subjectRepository.get(filter)

        for (const subject of subjects) {
            try {
                await classController.deleteClassesFromSubject(user, subject._id)
                await taskController.deleteTasksFromSubject(user, subject._id)
                await examController.deleteExamsFromSubject(user, subject._id)
                await subjectRepository.deleteById(user._id, subject._id)
            } catch(error) {
                console.error(`[deleteSubjectsFromSemester] Erro ao buscar informações e deletar subject ${subject._id}`)
            }
        }
    } catch(error) {
        console.error(`[deleteSubjectsFromSemester] Erro ao buscar e deletar todos os subjects do semester ${semesterId}, ${user._id} - ${user.email}. ${error.message}`)
        throw error
    }
}
module.exports.deleteSubject = deleteSubject

async function updateSubject(user, id, updateSubject) {
    try {
        if (!updateSubject || Object.keys(updateSubject) == 0) return
        if (!id) throw { code: 400, message: 'É obrigatório passar um id na requisição para buscar uma disciplina específica!' }
        validateUpdate(updateSubject)

        return await subjectRepository.updateById(user._id, id, updateSubject)
    } catch(error) {
        console.error(`[updateSubject] Erro ao atualizar subject ${id} do user ${user._id} - ${user.email}. ${error.message}`)
        throw error
    }
}
module.exports.updateSubject = updateSubject

function validateUpdate(update) {
    try {
        if (update._id || update.id) throw { code: 400, message: 'Não é possível atualizar o id da disciplina!' }
        if (update.author) throw { code: 400, message: 'Não é possível atualizar o author da disciplina!' }
        if (update.semester) throw { code: 400, message: 'Não é possível atualziar o período da disciplina!' }
    } catch(error) {
        throw error
    }
}

async function getSubjectsFromSemester(user, id) {
    try {
        if (!id) throw { code: 400, message: 'É obrigatório passar o id do período na requisição para buscar as disciplinas!' }

        let filter = {
            author: user._id,
            semester: id
        }
        let subjects = await subjectRepository.get(filter)
        return subjects
    } catch(error) {
        console.error(`[getAllSubjectsFromSemester]`)
    }
}
module.exports.getSubjectsFromSemester = getSubjectsFromSemester
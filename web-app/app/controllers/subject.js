const subjectRepository = require('../repositories/subject')
const semesterRepository = require('../repositories/semester')
const classController = require('./lesson')
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
        if (!subject || Object.keys(subject).length == 0) throw { code: 400, message: 'É obrigatório passar uma disciplina para ser salva!' }
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
        if (!updateSubject || Object.keys(updateSubject).length == 0) return
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
        console.error(`[getAllSubjectsFromSemester] Erro ao buscar subjects para o semester ${id} do user ${user._id} - ${user.email}. ${error.message}`)
        throw error
    }
}
module.exports.getSubjectsFromSemester = getSubjectsFromSemester

async function updateGrade(user, id, grades) {
    try {
        if (!id) throw { code: 400, message: 'É obrigatório passar o id da disciplina na requisição para registrar as notas!' }

        let subject = await subjectRepository.getById(user._id, id)
        if (!subject) throw { code: 404, message: 'É obrigatório passar o id da disciplina na requisição para registrar as notas!' }

        validateGrade(grades)

        let set = {
            finalGrade: calculateGrade(grades),
            grades: grades
        }
        return await subjectRepository.updateById(user._id, id, set)
    } catch(error) {
        console.error(`[updateGrade] Erro ao calcular grade do subject ${id} do user ${user._id} - ${user.email}. ${error.message}`)
        throw error
    }
}
module.exports.updateGrade = updateGrade

function validateGrade(grades) {
    try {
        if (!grades || Object.keys(grades).length == 0 || grades.length == 0) throw { code: 400, message: 'É obrigatório passar as notas para que sejam registradas na disciplina!'}
        grades.forEach(grade => {
            if (!grade.value) throw { code: 400, message: 'É obrigatório passar o valor da nota para que seja registrada na disciplina!'}
            if (!grade.weight) throw { code: 400, message: 'É obrigatório pasar o peso da nota para que seja registrada na disciplina!'}
        })
    } catch(error) {
        throw error
    }
}

function calculateGrade(grades) {
    let weight = 0
    let valueSum = grades.reduce((sum, grade) => {
        grade.value = parseInt(grade.value)
        grade.weight = parseInt(grade.weight)
        weight = weight + grade.weight
        return sum + (grade.value * grade.weight)
    }, 0)

    let finalGrade = valueSum / weight
    return finalGrade
}

async function getSubjectGrade(user, id) {
    try {
        if (!id) throw { code: 400, message: 'É obrigatório passar o id da disciplina na requisição para buscar as notas!' }

        let subject = await subjectRepository.getById(user._id, id)
        if (!subject) throw { code: 404, message: 'É obrigatório passar o id da disciplina na requisição para buscar as notas!' }

        return {
            name: subject.name,
            finalGrade: subject.finalGrade,
            grades: subject.grades
        }
    } catch(error) {
        console.error(`[getSubjectGrade] Erro ao buscar grades da subject ${id} do user ${user._id} - ${user.email}. ${error.message}`)
        throw error
    }
}
module.exports.getSubjectGrade = getSubjectGrade
const subjectRepository = require('../repositories/subject')
const classController = require('./class')
const taskController = require('./task')
const examController = require('./exam')

async function deleteSubjectsFromSemester(user, semesterId) {
    try {
        let filter = {
            author: user._id,
            semester: semesterId
        }

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
module.exports.deleteSubjectsFromSemester = deleteSubjectsFromSemester
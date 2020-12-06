const examRepository = require('../repositories/exam')

async function deleteExamsFromSubject(user, subjectId) {
    try {
        let filter = {
            subject: {
                id: subjectId,
                author: user._id
            }
        }

        let exams = await examRepository.get(filter)

        for (const exam of exams) {
            await examRepository.deleteById(user._id, exam._id)
        }
    } catch(error) {
        console.error(`[deleteExamsFromSubject] Erro ao buscar e deletar todas as tasks do subject ${subjectId}, ${user._id} - ${user.email}. ${error.message}`)
        throw error
    }
}
module.exports.deleteExamsFromSubject = deleteExamsFromSubject
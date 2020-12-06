const classRepository = require('../repositories/class')

async function deleteClassesFromSubject(user, subjectId) {
    try {
        let filter = {
            subject: {
                id: subjectId,
                author: user._id
            }
        }

        let classes = await classRepository.get(filter)

        for (const oneClass of classes) {
            await classRepository.deleteById(user._id, oneClass._id)
        }
    } catch(error) {
        console.error(`[deleteClassesFromSubject] Erro ao buscar e deletar todas as classes do subject ${subjectId}, ${user._id} - ${user.email}. ${error.message}`)
        throw error
    }
}
module.exports.deleteClassesFromSubject = deleteClassesFromSubject
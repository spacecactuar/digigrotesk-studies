const taskRepository = require('../repositories/task')

async function deleteTasksFromSubject(user, subjectId) {
    try {
        let filter = {}
        filter['subject.id'] = subjectId
        filter['subject.author'] = user._id

        let tasks = await taskRepository.get(filter)

        for (const task of tasks) {
            await taskRepository.deleteById(user._id, task._id)
        }
    } catch(error) {
        console.error(`[deleteTasksFromSubject] Erro ao buscar e deletar todas as tasks do subject ${subjectId}, ${user._id} - ${user.email}. ${error.message}`)
        throw error
    }
}
module.exports.deleteTasksFromSubject = deleteTasksFromSubject
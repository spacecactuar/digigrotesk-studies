const semesterRepository = require('../repositories/semester')

async function createSemester(user, newSemester) {
    try {
        validateSemester(newSemester)

        let semester = newSemester
        semester.author = user._id

        return await semesterRepository.create(semester)
    } catch(error) {
        console.error(`[createSemester] Erro ao criar semester para o user ${user._id} - ${user.email}. ${error.message}`)
        throw error
    }
}
module.exports.createSemester = createSemester

function validateSemester(semester) {
    try {
        if (!semester) throw { code: 400, message: 'É obrigatório passar um período para ser salvo!' }
        if (!semester.name) throw { code: 400, message: 'É obrigatório passar um(a) nome/identificação para o períoodo que será salvo!' }
        if (!semester.startDate) throw { code: 400, message: 'É obrigatório passar a data de início do período!' }
        if (!semester.endDate) throw { code: 400, message: 'É obrigatório passar a data de término do período!' }

        let startDate = new Date(semester.startDate)
        let endDate = new Date(semester.endDate)

        if (startDate > endDate)
                throw { code: 400, message: 'A data de início do período deve ser menor que a data de término!' }

        semester.startDate = startDate
        semester.endDate = endDate
    } catch(error) {
        throw error
    }
}
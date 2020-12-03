const jwt = require('jwt-simple')
const userRepository = require('../repositories/user')

async function createUser(newUser) {
    try {
        validateUser(newUser)
        let user = newUser

        let token = jwt.encode(user.email, 'secrect.key.super..secret')
        user.auth = {
            key: 'digiGrotesk-HelperClass',
            token: token
        }
        user.createDate = new Date()

        return await userRepository.create(user)
    } catch(error) {
        console.error(`[createUser] Erro ao criar User ${newUser.email}. ${error.message}`)
        throw error
    }
}
module.exports.createUser = createUser

function validateUser (user) {
    try {
        if (!user || !user.email) throw { code: 400, message: 'É obrigatório passar um email de usuário e senha para cadastro!' }
        if (!validateEmail(user.email)) throw { code: 400, message: 'É obrigatório passar um email válido para o usuário!' }
        if (!user.password) throw { code: 400, message: 'É obrigatório passar uma senha válida para o usuário!' }
    } catch(error) {
        throw error
    }
}

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}
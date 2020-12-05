
const assert = require('assert');
const userController = require('../../app/controllers/user')

describe('Testes unitários para o controller user', () => {
    it('CT001 - validateEmail', () => {
        let result = userController.validateEmail('')

        assert.equal(result, false);
    });
    it('CT002 - validateEmail', () => {
        let result = userController.validateEmail('pedro@')

        assert.equal(result, false);
    });
    it('CT003 - validateEmail', () => {
        let result = userController.validateEmail('pedro@.com')

        assert.equal(result, false);
    });
    it('CT004 - validateEmail', () => {
        let result = userController.validateEmail('@.com')

        assert.equal(result, false);
    });
    it('CT005 - validateEmail', () => {
        let result = userController.validateEmail('pedro.com')

        assert.equal(result, false);
    });
    it('CT006 - validateEmail', () => {
        let result = userController.validateEmail('pedro..@gmail.com')

        assert.equal(result, false);
    });
    it('CT007 - validateEmail', () => {
        let result = userController.validateEmail('pedro@gmail.com')

        assert.equal(result, true);
    });
    it('CT008 - validateUser', () => {
        let resultExpected = { code: 400, message: 'É obrigatório passar um email de usuário e senha para cadastro!' }
        let result
        try {
            result = userController.validateUser()
        } catch(error) {
            result = error
        }
        assert.deepEqual(result, resultExpected)
    });
    it('CT009 - validateUser', () => {
        let user = {}
        let resultExpected = { code: 400, message: 'É obrigatório passar um email de usuário e senha para cadastro!' }
        let result
        try {
            result = userController.validateUser(user)
        } catch(error) {
            result = error
        }
        assert.deepEqual(result, resultExpected)
    });
    it('CT010 - validateUser', () => {
        let user = {
            email: ''
        }
        let resultExpected = { code: 400, message: 'É obrigatório passar um email de usuário e senha para cadastro!' }
        let result
        try {
            result = userController.validateUser(user)
        } catch(error) {
            result = error
        }
        assert.deepEqual(result, resultExpected)
    });
    it('CT011 - validateUser', () => {
        let user = {
            email: 'a'
        }
        let resultExpected = { code: 400, message: 'É obrigatório passar um email válido para o usuário!' }
        let result
        try {
            result = userController.validateUser(user)
        } catch(error) {
            result = error
        }
        assert.deepEqual(result, resultExpected)
    });
    it('CT012 - validateUser', () => {
        let user = {
            email: 'pedro@gmail.com'
        }
        let resultExpected = { code: 400, message: 'É obrigatório passar uma senha válida para o usuário!' }
        let result
        try {
            result = userController.validateUser(user)
        } catch(error) {
            result = error
        }
        assert.deepEqual(result, resultExpected)
    });
    it('CT013 - validateUser', () => {
        let user = {
            email: 'pedro@gmail.com',
            password: 'password'
        }
        let resultExpected = undefined
        let result
        try {
            result = userController.validateUser(user)
        } catch(error) {
            result = error
        }
        assert.deepEqual(result, resultExpected)
    });
})
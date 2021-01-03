const assert = require('assert');
const middleware = require('../../app/controllers/middleware')

describe('Testes unitários para o controller middleware', () => {
    describe('validateApiHeaders()', () => {
        it('CT001 - key undefined, token undefined', () => {
            let resultExpected = { code: 400, message: 'É obrigatório passar o header x-key-api para acessar a API!' }
            let result
            try {
                result = middleware.validateApiHeaders()
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT002 - key undefined', () => {
            let token = 'tokenTest'
            let resultExpected = { code: 400, message: 'É obrigatório passar o header x-key-api para acessar a API!' }
            let result
            try {
                result = middleware.validateApiHeaders(null, token)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT003 - key invalid', () => {
            let key = 'keyTest'
            let resultExpected = { code: 400, message: 'Valor x-key-api passado não é o correto!' }
            let result
            try {
                result = middleware.validateApiHeaders(key)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT004 - key invalid', () => {
            let key = 'keyTest'
            let token = 'tokenTest'
            let resultExpected = { code: 400, message: 'Valor x-key-api passado não é o correto!' }
            let result
            try {
                result = middleware.validateApiHeaders(key, token)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT005 - token invalid', () => {
            let key = 'digiGrotesk-HelperClass'
            let resultExpected = { code: 400, message: 'É obrigatório passar o header x-token-api para acessar a API!' }
            let result
            try {
                result = middleware.validateApiHeaders(key)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT006 - valid headers', () => {
            let key = 'digiGrotesk-HelperClass'
            let token = 'tokenTest'
            let resultExpected = undefined
            let result
            try {
                result = middleware.validateApiHeaders(key, token)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    })
})
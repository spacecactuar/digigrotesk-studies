const assert = require('assert');
const examsController = require('../../app/controllers/exam')

describe('Testes unitários para o controller exam', () => {
    describe('validateExam()', () => {
        it('CT001 - exam null', () => {
            let resultExpected = { code: 400, message: 'É obrigatório passar uma prova para ser salva!' }
            let result
            try {
                result = examsController.validateExam()
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT002 - exam undefined', () => {
            let exam = {}
            let resultExpected = { code: 400, message: 'É obrigatório passar uma prova para ser salva!' }
            let result
            try {
                result = examsController.validateExam(exam)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT003 - name invalid', () => {
            let exam = {
                subject: 'Subject Test',
                date: new Date()
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar um(a) nome/identificação da prova!' }
            let result
            try {
                result = examsController.validateExam(exam)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT004 - subject invalid', () => {
            let exam = {
                name: 'Name Test',
                date: new Date()
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar a qual disciplina esta prova vai pertencer!' }
            let result
            try {
                result = examsController.validateExam(exam)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT005 - date invalid', () => {
            let exam = {
                name: 'Name Test',
                subject: 'Subject Test'
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar a data de realização da prova!' }
            let result
            try {
                result = examsController.validateExam(exam)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT006 - valid exam', () => {
            let exam = {
                name: 'Name Test',
                subject: 'Subject Test',
                date: new Date()
            }
            let resultExpected = undefined
            let result
            try {
                result = examsController.validateExam(exam)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    });
    describe('validateUpdate()', () => {
        it('CT007 - update subject', () => {
            let update = {
                subject: 'Subject Update'
            }
            let resultExpected = { code: 400, message: 'Não é possível atualizar a disciplina da prova!' }
            let result
            try {
                result = examsController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT008 - update create', () => {
            let update = {
                create: new Date()
            }
            let resultExpected = { code: 400, message: 'Não é possível atualizar a data de criação da prova!' }
            let result
            try {
                result = examsController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT009 - valid update', () => {
            let update = {
                name: 'Exam Update'
            }
            let resultExpected = undefined
            let result
            try {
                result = examsController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    })
})
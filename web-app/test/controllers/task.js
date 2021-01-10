const assert = require('assert');
const taskController = require('../../app/controllers/task')

describe('Testes unitários para o controller task', () => {
    describe('validateTask()', () => {
        it('CT001 - task null', () => {
            let resultExpected = { code: 400, message: 'É obrigatório passar uma tarefa para ser salva!' }
            let result
            try {
                result = taskController.validateTask()
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT002 - task undefined', () => {
            let task = {}
            let resultExpected = { code: 400, message: 'É obrigatório passar uma tarefa para ser salva!' }
            let result
            try {
                result = taskController.validateTask(task)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT003 - name invalid', () => {
            let task = {
                subject: 'abcd1234',
                deadline: '2020-12-31'
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar um(a) nome/identificação da tarefa!' }
            let result
            try {
                result = taskController.validateTask(task)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT004 - subject invalid', () => {
            let task = {
                name: 'Name Test',
                deadline: '2020-12-31'
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar a qual disciplina esta tarefa vai pertencer!' }
            let result
            try {
                result = taskController.validateTask(task)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT005 - deadline invalid', () => {
            let task = {
                name: 'Name Test',
                subject: 'abcd1234'
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar a data de entrega da tarefa!' }
            let result
            try {
                result = taskController.validateTask(task)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT006 - valid task', () => {
            let task = {
                name: 'Name Test',
                subject: 'abcd1234',
                deadline: '2020-12-31'
            }
            let resultExpected = undefined
            let result
            try {
                result = taskController.validateTask(task)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    });
    describe('validateUpdate()', () => {
        it('CT007 - update author', () => {
           let update = {
               author: 'abcd1234'
           }
           let resultExpected = { code: 400, message: 'Não é possível atualizar o author da tarefa!' }
           let result
           try {
               result = taskController.validateUpdate(update)
           } catch(error) {
               result = error
           }
           assert.deepEqual(result, resultExpected)
        });
        it('CT008 - update subject', () => {
            let update = {
                subject: 'abcd1234'
            }
            let resultExpected = { code: 400, message: 'Não é possível atualizar a disciplina da tarefa!' }
            let result
            try {
                result = taskController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT009 - update create', () => {
            let update = {
                create: new Date()
            }
            let resultExpected = { code: 400, message: 'Não é possível atualizar a data de criação da tarefa!' }
            let result
            try {
                result = taskController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT010 - update realized', () => {
            let update = {
                realized: true
            }
            let resultExpected = { code: 400, message: 'Para marcar a tarefa como realizada use a rota específica da API para isso!' }
            let result
            try {
                result = taskController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT011 - update realizedDate', () => {
            let update = {
                realizedDate: new Date()
            }
            let resultExpected = { code: 400, message: 'Para marcar a de realização da tarefa use a rota específica da API para isso!' }
            let result
            try {
                result = taskController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT012 - valid update', () => {
            let update = {
                observation: 'Observation Test',
                deadline: '2020-12-31'
            }
            let resultExpected = undefined
            let result
            try {
                result = taskController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    });
})
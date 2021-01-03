const assert = require('assert');
const semesterController = require('../../app/controllers/semester')

describe('Testes unitários para o controller semester', () => {
    describe('validateDate()', () => {
        it('CT001 - startDate > endDate', () => {
            let semester = {
                startDate: '2020-12-10',
                endDate: '2020-12-01'
            }
            let resultExpected = { code: 400, message: 'A data de início do período deve ser menor que a data de término!' }
            let result
            try {
                result = semesterController.validateDate(semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT002 - valid dates', () => {
            let semester = {
                startDate: '2020-12-01',
                endDate: '2020-12-10'
            }
            let resultExpected = undefined
            let result
            try {
                result = semesterController.validateDate(semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    });
    describe('validateSemester()', () => {
        it('CT003 - semester null', () => {
            let resultExpected = { code: 400, message: 'É obrigatório passar um período para ser salvo!' }
            let result
            try {
                result = semesterController.validateSemester()
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT004 - semester undefined', () => {
            let semester = {}
            let resultExpected = { code: 400, message: 'É obrigatório passar um período para ser salvo!' }
            let result
            try {
                result = semesterController.validateSemester(semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT005 - name invalid', () => {
            let semester = {
                startDate: '2020-12-01',
                endDate: '2020-12-10'
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar um(a) nome/identificação do períoodo!' }
            let result
            try {
                result = semesterController.validateSemester(semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT006 - startDate invalid', () => {
            let semester = {
                name: 'Name Test',
                endDate: '2020-12-10'
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar a data de início do período!' }
            let result
            try {
                result = semesterController.validateSemester(semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT007 - endDate invalid', () => {
            let semester = {
                name: 'Name Test',
                startDate: '2020-12-10'
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar a data de término do período!' }
            let result
            try {
                result = semesterController.validateSemester(semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT008 - valid semester', () => {
            let semester = {
                name: 'Name Test',
                startDate: '2020-12-01',
                endDate: '2020-12-10'
            }
            let resultExpected = undefined
            let result
            try {
                result = semesterController.validateSemester(semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    });
    describe('validateUpdate()', () => {
        it('CT009 - update id', () => {
            let update = {
                id: 'asuashu1721631276asd'
            }
            let resultExpected = { code: 400, message: 'Não é possível atualizar o id do período!' }
            let result
            try {
                result = semesterController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT010 - update _id', () => {
            let update = {}
            update['_id'] = 'asuashu1721631276asd'
            let resultExpected = { code: 400, message: 'Não é possível atualizar o id do período!' }
            let result
            try {
                result = semesterController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT011 - update author', () => {
            let update = {
                author: 'abcd1234'
            }
            let resultExpected = { code: 400, message: 'Não é possível atualizar o author do período!' }
            let result
            try {
                result = semesterController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT012 - update startDate invalid', () => {
            let update = {
                startDate: '2020-12-10'
            }
            let semester = {
                startDate: new Date('2020-11-01'),
                endDate: new Date('2020-12-05')
            }
            let resultExpected = { code: 400, message: 'A data de início do período deve ser menor que a data de término!' }
            let result
            try {
                result = semesterController.validateUpdate(update, semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT013 - update startDate valid', () => {
            let update = {
                startDate: '2020-12-04'
            }
            let semester = {
                startDate: new Date('2020-11-01'),
                endDate: new Date('2020-12-05')
            }
            let resultExpected = undefined
            let result
            try {
                result = semesterController.validateUpdate(update, semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT014 - update endDate invalid', () => {
            let update = {
                endDate: '2020-10-30'
            }
            let semester = {
                startDate: new Date('2020-11-01'),
                endDate: new Date('2020-12-05')
            }
            let resultExpected = { code: 400, message: 'A data de início do período deve ser menor que a data de término!' }
            let result
            try {
                result = semesterController.validateUpdate(update, semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT015 - update endDate valid', () => {
            let update = {
                endDate: '2020-11-30'
            }
            let semester = {
                startDate: new Date('2020-11-01'),
                endDate: new Date('2020-12-05')
            }
            let resultExpected = undefined
            let result
            try {
                result = semesterController.validateUpdate(update, semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT016 - update startDate endDate invalid', () => {
            let update = {
                startDate: '2020-12-01',
                endDate: '2020-11-30'
            }
            let semester = {
                startDate: new Date('2020-11-01'),
                endDate: new Date('2020-12-05')
            }
            let resultExpected = { code: 400, message: 'A data de início do período deve ser menor que a data de término!' }
            let result
            try {
                result = semesterController.validateUpdate(update, semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT017 - update startDate endDate valid', () => {
            let update = {
                startDate: '2020-12-01',
                endDate: '2020-12-31'
            }
            let semester = {
                startDate: new Date('2020-11-01'),
                endDate: new Date('2020-12-05')
            }
            let resultExpected = undefined
            let result
            try {
                result = semesterController.validateUpdate(update, semester)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    });
    describe('bindExamsInfo()', () => {
        it('CT018 - bindExams correctly',  () => {
            let exams = [{
                id: 'abcd1234',
                name: 'exam1',
                subject: {
                    id: 'abcd1234',
                    author: 'abcd1234'
                },
                theme: 'theme exam1',
                date: new Date('2020-12-31'),
                create: new Date('2020-12-31')
            }, {
                id: 'abcd1234',
                name: 'exam2',
                subject: {
                    id: 'abcd1234',
                    author: 'abcd1234'
                },
                theme: 'theme exam2',
                date: new Date('2020-12-30'),
                create: new Date('2020-12-30')
            }]

            let resultExpected = [{
                name: 'exam1',
                theme: 'theme exam1',
                date: new Date('2020-12-31'),
            },{
                name: 'exam2',
                theme: 'theme exam2',
                date: new Date('2020-12-30'),
            }]

            let result = semesterController.bindExamsInfo(exams)
            assert.deepEqual(result, resultExpected)
        })
    });
    describe('bindTasksInfo()', () => {
        it('CT019 - bindTasks correctly', () => {
            let tasks = [{
                id: 'abcd1234',
                name: 'task1',
                observation: 'observation task1',
                deadline: new Date('2020-12-30'),
                subject: {
                    id: 'abcd1234',
                    author: 'abcd1234'
                },
                realized : new Date('2020-12-30'),
                realizedDate: new Date('2020-12-30'),
                create: new Date('2020-12-01')
            },{
                id: 'abcd1234',
                name: 'task2',
                observation: 'observation task2',
                deadline: new Date('2020-12-31'),
                subject: {
                    id: 'abcd1234',
                    author: 'abcd1234'
                },
                realized : new Date('2020-12-31'),
                realizedDate: new Date('2020-12-31'),
                create: new Date('2020-12-01')
            }]

            let resultExpected = [{
                name: 'task1',
                deadline: new Date('2020-12-30'),
                realized : new Date('2020-12-30'),
                realizedDate: new Date('2020-12-30')
            },{
                name: 'task2',
                deadline: new Date('2020-12-31'),
                realized : new Date('2020-12-31'),
                realizedDate: new Date('2020-12-31')
            }]

            let result = semesterController.bindTasksInfo(tasks)
            assert.deepEqual(result, resultExpected)
        })
    });
    describe('bindLessonsInfo()', () => {
        it('CT020 - bindLessons correctly', () => {
            let lessons = [{
                id: 'abcd1234',
                subject: {
                    id: 'abcd1234',
                    author: 'abcd1234'
                },
                duration: 120,
                realizationDays: [{
                    day: 'mon',
                    start: '18:50'
                }],
                quantity: 64,
                create: new Date('2020-12-01')
            },{
                id: 'abcd1234',
                subject: {
                    id: 'abcd1234',
                    author: 'abcd1234'
                },
                duration: 120,
                realizationDays: [{
                    day: 'fri',
                    start: '18:50'
                }],
                quantity: 32,
                create: new Date('2020-12-01')
            }]

            let resultExpected = [{
                duration: 120,
                realizationDays: [{
                    day: 'mon',
                    start: '18:50'
                }]
            },{
                duration: 120,
                realizationDays: [{
                    day: 'fri',
                    start: '18:50'
                }]
            }]

            let result = semesterController.bindLessonsInfo(lessons)
            assert.deepEqual(result, resultExpected)
        })
    })
})
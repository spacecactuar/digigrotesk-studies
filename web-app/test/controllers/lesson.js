const assert = require('assert');
const lessonController = require('../../app/controllers/lesson')

describe('Testes unitários para o controller lesson', () => {
    describe('validateLesson()', () => {
        it('CT001 - lesson null', () => {
            let resultExpected = { code: 400, message: 'É obrigatório passar uma aula para ser salva!' }
            let result
            try {
                result = lessonController.validateLesson()
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT002 - lesson undefined', () => {
            let lesson = {}
            let resultExpected = { code: 400, message: 'É obrigatório passar uma aula para ser salva!' }
            let result
            try {
                result = lessonController.validateLesson(lesson)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT003 - subject invalid', () => {
            let lesson = {
                duration: 40,
                realizationDays: []
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar a qual disciplina esta aula vai pertencer!' }
            let result
            try {
                result = lessonController.validateLesson(lesson)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT004 - duration invalid', () => {
            let lesson = {
                subject: 'Subject Test',
                realizationDays: []
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar a duração das aulas!' }
            let result
            try {
                result = lessonController.validateLesson(lesson)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT005 - realizationDays null', () => {
            let lesson = {
                subject: 'Subject Test',
                duration: 40
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar os dias da semana que a aula vai ser realizada!' }
            let result
            try {
                result = lessonController.validateLesson(lesson)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT006 - realizationDays empty', () => {
            let lesson = {
                subject: 'Subject Test',
                duration: 40,
                realizationDays: []
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar os dias da semana que a aula vai ser realizada!' }
            let result
            try {
                result = lessonController.validateLesson(lesson)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT007 - realizationDays without day', () => {
            let lesson = {
                subject: 'Subject Test',
                duration: 40,
                realizationDays: [{
                    start: '18:50'
                }]
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar o dia da semana e horário de inicio de cada aula!' }
            let result
            try {
                result = lessonController.validateLesson(lesson)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT008 - realizationDays without day', () => {
            let lesson = {
                subject: 'Subject Test',
                duration: 120,
                realizationDays: [{
                    day: 'wed',
                    start: '18:50'
                },{
                    start: '18:50'
                }]
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar o dia da semana e horário de inicio de cada aula!' }
            let result
            try {
                result = lessonController.validateLesson(lesson)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT009 - realizationDays without start', () => {
            let lesson = {
                subject: 'Subject Test',
                duration: 40,
                realizationDays: [{
                    day: 'mon'
                }]
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar o dia da semana e horário de inicio de cada aula!' }
            let result
            try {
                result = lessonController.validateLesson(lesson)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT010 - realizationDays without start', () => {
            let lesson = {
                subject: 'Subject Test',
                duration: 120,
                realizationDays: [{
                    day: 'wed',
                    start: '18:50'
                },{
                    day: 'fri'
                }]
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar o dia da semana e horário de inicio de cada aula!' }
            let result
            try {
                result = lessonController.validateLesson(lesson)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT011 - valid lesson', () => {
            let lesson = {
                subject: 'Subject Test',
                duration: 120,
                realizationDays: [{
                    day: 'wed',
                    start: '18:50'
                },{
                    day: 'fri',
                    start: '18:50'
                }]
            }
            let resultExpected = undefined
            let result
            try {
                result = lessonController.validateLesson(lesson)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    });
    describe('calculateLessonsQuantity()', () => {
        it('CT012 - realizationDays = 1', () => {
            let subjectStart = new Date('2020-12-06')
            let subjectEnd = new Date('2020-12-12')
            let realizationDays = [{
                day: 'mon',
                start: '18:50'
            }]

            let resultExpected = 1
            let result
            try {
                result = lessonController.calculateLessonsQuantity(subjectStart, subjectEnd, realizationDays)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT013 - realizationDays = 2', () => {
            let subjectStart = new Date('2020-12-06')
            let subjectEnd = new Date('2020-12-12')
            let realizationDays = [{
                day: 'wed',
                start: '18:50'
            },{
                day: 'fri',
                start: '18:50'
            }]

            let resultExpected = 2
            let result
            try {
                result = lessonController.calculateLessonsQuantity(subjectStart, subjectEnd, realizationDays)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT014 - realizationDays = 4', () => {
            let subjectStart = new Date('2020-12-01')
            let subjectEnd = new Date('2020-12-31')
            let realizationDays = [{
                day: 'sat',
                start: '08:00'
            }]

            let resultExpected = 4
            let result
            try {
                result = lessonController.calculateLessonsQuantity(subjectStart, subjectEnd, realizationDays)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT015 - realizationDays = 18', () => {
            let subjectStart = new Date('2020-11-01')
            let subjectEnd = new Date('2020-12-31')
            let realizationDays = [{
                day: 'mon',
                start: '18:50'
            },{
                day: 'mon',
                start: '20:30'
            }]

            let resultExpected = 18
            let result
            try {
                result = lessonController.calculateLessonsQuantity(subjectStart, subjectEnd, realizationDays)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    })
    describe('validateUpdate()', () => {
        it('CT016 - update subject', () => {
            let update = {
                subject: 'Subject Test'
            }
            let resultExpected = { code: 400, message: 'Não é possível atualizar a disciplina da aula!' }
            let result
            try {
                result = lessonController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT017 - update create', () => {
            let update = {
                create: new Date()
            }
            let resultExpected = { code: 400, message: 'Não é possível atualizar a data de criação da aula!' }
            let result
            try {
                result = lessonController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT018 - update realizationDays empty', () => {
            let update = {
                realizationDays: []
            }
            let resultExpected = { code: 400, message: 'Não é possível apagar os dias da semana que a aula vai ser realizada!' }
            let result
            try {
                result = lessonController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT019 - update realizationDays without day', () => {
            let update = {
                realizationDays: [{
                    start: '18:50'
                }]
            }
            let resultExpected = { code: 400, message: 'Para atualizar os dias de realização da aula é necessário passar o dia da semana e horário de inicio de cada aula!' }
            let result
            try {
                result = lessonController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT020 - update realizationDays without day', () => {
            let update = {
                realizationDays: [{
                    day: 'mon',
                    start: '18:50'
                }, {
                    start: '18:50'
                }]
            }
            let resultExpected = { code: 400, message: 'Para atualizar os dias de realização da aula é necessário passar o dia da semana e horário de inicio de cada aula!' }
            let result
            try {
                result = lessonController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT021 - update realizationDays without start', () => {
            let update = {
                realizationDays: [{
                    day: 'mon'
                }]
            }
            let resultExpected = { code: 400, message: 'Para atualizar os dias de realização da aula é necessário passar o dia da semana e horário de inicio de cada aula!' }
            let result
            try {
                result = lessonController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT022 - update realizationDays without start', () => {
            let update = {
                realizationDays: [{
                    day: 'wed',
                    start: '18:50'
                }, {
                    day: 'fri'
                }]
            }
            let resultExpected = { code: 400, message: 'Para atualizar os dias de realização da aula é necessário passar o dia da semana e horário de inicio de cada aula!' }
            let result
            try {
                result = lessonController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT023 - valid update', () => {
            let update = {
                realizationDays: [{
                    day: 'wed',
                    start: '18:50'
                }, {
                    day: 'fri',
                    start: '18:50'
                }]
            }
            let resultExpected = undefined
            let result
            try {
                result = lessonController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT024 - update quantity', () => {
            let update = {
                quantity: 90
            }
            let resultExpected = { code: 400, message: 'Não é possível atualizar a quantidade de aulas!' }
            let result
            try {
                result = lessonController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    })
})
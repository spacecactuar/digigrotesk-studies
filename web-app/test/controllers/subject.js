const assert = require('assert');
const subjecteController = require('../../app/controllers/subject')

describe('Testes unitários para o controller subject', () => {
    describe('validateDate()', () => {
        it('CT001 - start > end', () => {
            let subject = {
                start: '2020-12-10',
                end: '2020-12-01'
            }
            let resultExpected = { code: 400, message: 'A data de início da disciplina deve ser menor que a data de término!' }
            let result
            try {
                result = subjecteController.validateDate(subject)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT002 - valid dates', () => {
            let subject = {
                start: '2020-12-01',
                end: '2020-12-31'
            }
            let resultExpected = undefined
            let result
            try {
                result = subjecteController.validateDate(subject)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    });
    describe('validateSubject()', () => {
        it('CT003 - subject null', () => {
            let resultExpected = { code: 400, message: 'É obrigatório passar uma disciplina para ser salva!' }
            let result
            try {
                result = subjecteController.validateSubject()
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT004 - subject undefined', () => {
            let subject = {}
            let resultExpected = { code: 400, message: 'É obrigatório passar uma disciplina para ser salva!' }
            let result
            try {
                result = subjecteController.validateSubject(subject)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT005 - name invalid', () => {
            let subject = {
                semester: 'abcd1234',
                start: '2020-12-01',
                end: '2020-12-31'
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar um(a) nome/identificação para a disciplina que será salva!' }
            let result
            try {
                result = subjecteController.validateSubject(subject)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT006 - semester invalid', () => {
            let subject = {
                name: 'Name Test',
                start: '2020-12-01',
                end: '2020-12-31'
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar a qual período esta disciplina vai pertencer!' }
            let result
            try {
                result = subjecteController.validateSubject(subject)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT007 - start invalid', () => {
            let subject = {
                name: 'Name Test',
                semester: 'abcd1234',
                end: '2020-12-31'
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar a data de início da disciplina!' }
            let result
            try {
                result = subjecteController.validateSubject(subject)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT008 - end invalid', () => {
            let subject = {
                name: 'Name Test',
                semester: 'abcd1234',
                start: '2020-12-31'
            }
            let resultExpected = { code: 400, message: 'É obrigatório passar a data de término da disciplina!' }
            let result
            try {
                result = subjecteController.validateSubject(subject)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT009 - dates invalid', () => {
            let subject = {
                name: 'Name Test',
                semester: 'abcd1234',
                start: '2020-12-10',
                end: '2020-12-01'
            }
            let resultExpected = { code: 400, message: 'A data de início da disciplina deve ser menor que a data de término!' }
            let result
            try {
                result = subjecteController.validateSubject(subject)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT010 - valid subjecte', () => {
            let subject = {
                name: 'Name Test',
                semester: 'abcd1234',
                start: '2020-12-01',
                end: '2020-12-31'
            }
            let resultExpected = undefined
            let result
            try {
                result = subjecteController.validateSubject(subject)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    });
    describe('validateUpdate()', () => {
        it('CT011 - update id', () => {
            let update = {
                id: 'abcd1234'
            }
            let resultExpected = { code: 400, message: 'Não é possível atualizar o id da disciplina!' }
            let result
            try {
                result = subjecteController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT012 - update _id', () => {
            let update = {}
            update['_id'] = 'abcd1234'
            let resultExpected = { code: 400, message: 'Não é possível atualizar o id da disciplina!' }
            let result
            try {
                result = subjecteController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT013 - update author', () => {
            let update = {
                author: 'abcd1234'
            }
            let resultExpected = { code: 400, message: 'Não é possível atualizar o author da disciplina!' }
            let result
            try {
                result = subjecteController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT014 - update semester', () => {
            let update = {
                semester: 'abcd1234'
            }
            let resultExpected = { code: 400, message: 'Não é possível atualziar o período da disciplina!' }
            let result
            try {
                result = subjecteController.validateUpdate(update)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    });
    describe('validateGrade()', () => {
        it('CT015 - grades null', () => {
            let resultExpected = { code: 400, message: 'É obrigatório passar as notas para que sejam registradas na disciplina!'}
            let result
            try {
                result = subjecteController.validateGrade()
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT016 - grades undefined', () => {
            let grades = []
            let resultExpected = { code: 400, message: 'É obrigatório passar as notas para que sejam registradas na disciplina!'}
            let result
            try {
                result = subjecteController.validateGrade(grades)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT017 - grades without value', () => {
            let grades = [{
                weight: 3
            }]
            let resultExpected = { code: 400, message: 'É obrigatório passar o valor da nota para que seja registrada na disciplina!'}
            let result
            try {
                result = subjecteController.validateGrade(grades)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT018 - grades without value', () => {
            let grades = [{
                value: 10,
                weight: 3
            },{
                weight: 2
            }]
            let resultExpected = { code: 400, message: 'É obrigatório passar o valor da nota para que seja registrada na disciplina!'}
            let result
            try {
                result = subjecteController.validateGrade(grades)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT019 - grades without weigth', () => {
            let grades = [{
                value: 10
            }]
            let resultExpected = { code: 400, message: 'É obrigatório pasar o peso da nota para que seja registrada na disciplina!'}
            let result
            try {
                result = subjecteController.validateGrade(grades)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT020 - grades without weigth', () => {
            let grades = [{
                value: 10,
                weight: 3
            },{
                value: 8
            }]
            let resultExpected = { code: 400, message: 'É obrigatório pasar o peso da nota para que seja registrada na disciplina!'}
            let result
            try {
                result = subjecteController.validateGrade(grades)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT021 - valid grades', () => {
            let grades = [{
                value: 10,
                weight: 3
            },{
                value: 8,
                weight: 2
            }]
            let resultExpected = undefined
            let result
            try {
                result = subjecteController.validateGrade(grades)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    });
    describe('calculateGrade()', () => {
        it('CT022 - finalGrade = 9.2', () => {
            let grades = [{
                value: 10,
                weight: 3
            },{
                value: 8,
                weight: 2
            }]
            let resultExpected = 9.2
            let result
            try {
                result = subjecteController.calculateGrade(grades)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
        it('CT023 - finalGrade = 8.3', () => {
            let grades = [{
                "value": 10,
                "weight": 3
            },{
                "value": 8,
                "weight": 2
            },{
                "value": 7,
                "weight": 3
            },{
                "value": 8,
                "weight": 2
            }]
            let resultExpected = 8.3
            let result
            try {
                result = subjecteController.calculateGrade(grades)
            } catch(error) {
                result = error
            }
            assert.deepEqual(result, resultExpected)
        });
    });
})
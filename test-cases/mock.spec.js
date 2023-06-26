const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect
const Student = require('../controllers/functionController')
const studentObj = new Student()

describe('Mock call ', () => {
    it('count function call', () => {
        let mock = sinon.mock(studentObj)
        let expt = mock.expects('externalCall')
        expt.exactly(3)
        expt.withArgs(2, 2)
        studentObj.parent2(2, 2, 3)
        mock.verify()
    })
})
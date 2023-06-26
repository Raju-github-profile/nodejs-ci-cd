const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect
const Student = require('../controllers/functionController')
const studentObj = new Student()
const chaiPromise = require('chai-as-promised')
chai.use(chaiPromise)

describe('Describe - function ', () => {
    it('count function call', () => {
        let spyObj = sinon.spy(studentObj, 'child')
        studentObj.parent(2, 3, 4, 'mul')
        expect(spyObj.calledThrice).to.be.true;
        expect(spyObj.calledWith(2, 3, 4)).to.be.true;
    })

    it('stub function call', () => {
        let stubObj = sinon.stub(studentObj, 'externalCall')
        stubObj.withArgs(2, 2).returns(5)
        expect(studentObj.parent2(2, 2, 3)).to.be.equal(60)
    })

    it('Without chai Promise function call', function (done) {
        this.timeout(2000)
        studentObj.getData().then((result) => {
            expect(result).to.be.equal(10)
            done()
        })
    })

    it('Chai Promise function call', function () {
        this.timeout(2000)
        return expect(studentObj.getData()).to.eventually.equal(10)
    })

    it('Otp Promise function call', () => {
        return expect(studentObj.getOtp()).to.eventually.have.deep.property('otp')
    })

})
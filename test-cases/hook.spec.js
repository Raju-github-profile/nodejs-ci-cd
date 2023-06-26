const chai = require('chai')
const expect = chai.expect

describe('  Hook Hook !! ', () => {
    let data = 'sustain'
    before(function () {
        console.log('Top level')
    })
    after(function () {
        console.log('Bottom level')
    })

    beforeEach(function () {
        console.log('Before each individual testing')
    })

    afterEach(function () {
        console.log('After each individual testing')
    })


    it('Hook testing 1', function () {
        expect(data).to.be.a('string')
    })
    it.skip('Hook testing 2', function () {
        expect(data).to.be.equal('sustain')
    })
})

describe('Hook 2 ', () => {
    let val = 8
    it('Hook testing 2', function () {
        expect(val).to.be.equal(8)
    })
})
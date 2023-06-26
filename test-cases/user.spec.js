const chai = require('chai')
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;

describe('first-assert-test', () => {
    const username = 'Saroj'
    const age = 23
    const data = {
        product: [{ name: 'fruit' }, { name: 'Smartphone' }],
        isVerified: false
    }
    it('Inside it-1', () => {
        assert.typeOf(username, 'string')
        assert.typeOf(age, 'number')
        assert.lengthOf(data.product, 2)
        assert.equal(data.isVerified, false)
    })
})

describe('first-should-test', () => {
    const username = 'Saroj'
    const age = 23
    const data = {
        product: [{ name: 'fruit' }, { name: 'Smartphone' }],
        isVerified: false
    }

    it('Inside should-1', () => {
        username.should.be.a('string')
        data.product.length.should.be.equal(2)
        data.should.have.property('product').with.lengthOf(2)
    })
})
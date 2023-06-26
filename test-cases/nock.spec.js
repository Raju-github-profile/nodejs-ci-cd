const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect
const Student = require('../controllers/functionController')
const studentObj = new Student()
const nock = require('nock')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('  Nock Nock !! ', () => {
    it('Nock function call', (done) => {
        let obj = { data: [] }
        // let obj = { status: 'OK', statusCode: 200, data: [] }
        nock('https://jsonplaceholder.typicode.com')
            .get('/todos')
            .reply(200, obj)
        studentObj.apiCall()
            .then(function (record) {
                console.log({ record })
                expect(record).to.be.eql(obj)
                done()
            })
            .catch(error => {
                done(new Error(error))
            })
    })

    it('Own server function call', (done) => {
        const url = 'http://localhost:5000'
        chai.request(url)
            .get('/student')
            .end((err, response) => {
                expect(response.status).to.be.equal(200)
                expect(response.body).to.have.all.keys('data', 'statusText', 'typee')
                done()
            })
    })


})
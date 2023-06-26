const axios = require('axios')
class Student {
    constructor() {
    }
    child(num1, num2, num3, type) {
        if (type === 'mul') {
            return num1 * num2 * num3
        }
        return num1 - num2 - num3 - 45 //not covered

    }
    child2(num1, num2, num3, z) {
        return num1 * num2 * num3 * z
    }
    parent(num1, num2, num3, type) {
        const result = this.child(num1, num2, num3, type)
        this.child(num1, num2, num3, type)
        this.child(num1, num2, num3, type)
        return result
    }

    externalCall(x, y) {
        return 10 + x + y

    }
    parent2(num1, num2, z) {
        this.externalCall(num1, num2)
        this.externalCall(num1, num2)
        const num3 = this.externalCall(num1, num2)
        const result = this.child2(num1, num2, num3, z)
        return result
    }

    getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                resolve(10)
                , 100)
        })
    }

    getOtp() {
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                resolve({ otp: 5642 })
                , 100)
        })
    }

    apiCall() {
        return new Promise((resolve, reject) => {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(response => {
                    // resolve({ status: 'OK', statusCode: 200, data: response.data.data })
                    resolve({data: response.data.data })
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

}
module.exports = Student
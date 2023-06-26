const getUsers = (req, res) => {
console.log('connection success')
    res.status(200).json({ data: ['xssx', 'xxx'], statusText: 'xx', typee: 'xxx' })

}

module.exports = {
    getUsers
}
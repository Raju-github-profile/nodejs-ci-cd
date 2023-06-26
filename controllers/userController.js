const getUsers = (req, res) => {
console.log('connection success')
    res.status(200).json({ data: ['xx', 'xx'], statusText: 'xx', typee: 'xxx' })

}

module.exports = {
    getUsers
}
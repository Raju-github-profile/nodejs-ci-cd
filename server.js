const express = require('express')
const studentRoutes = require('./controllers/studentController')
const app = express()
const port = 5000
app.use('/student', studentRoutes)
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
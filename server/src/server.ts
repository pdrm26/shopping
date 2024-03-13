import express from 'express'
const app = express()

app.use('/', (req, res) => {
    res.status(200).send('initiate the app')
})

app.listen(3000)

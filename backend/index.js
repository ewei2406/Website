const express = require('express')
const App = express()

App.use(express.json())
App.use(express.static('build'))

const PORT = process.env.PORT || 3001

App.get('/test', (req, res) => {
    res.send('Hello from backend 2')
})

App.listen(PORT, () => {
    console.log(`App running on Port ${PORT}`)
})

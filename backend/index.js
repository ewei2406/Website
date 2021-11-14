const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.static('build'))

const PORT = process.env.PORT || 3001

app.get('/test', (req, res) => {
    res.send('Hello from backend 2')
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

app.listen(PORT, () => {
    console.log(`app running on Port ${PORT}`)
})

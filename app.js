var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('Hello, world...')
})

app.listen(8000, () => {
    console.log('I\'m listening port 8000')
})

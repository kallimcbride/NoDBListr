const express = require('express')

const listCtrl = require('./controllers/lists')

const app = express()
const port = 4200

app.use(express.json())

app.get('/api/groceries', listCtrl.read)





app.listen(port, () => {
    console.log('listening boi', 4200)
})
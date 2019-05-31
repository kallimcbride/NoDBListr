const express = require('express')

const listCtrl = require('./controllers/lists')

const app = express()
const port = 4200

app.use(express.json())

app.get('/api/groceries', listCtrl.read)
app.post('/api/groceries', listCtrl.create)
app.put('/api/groceries/:id', listCtrl.update)
app.delete('/api/groceries/:id', listCtrl.delete)


app.listen(port, () => {
    console.log('listening boi', 4200)
})
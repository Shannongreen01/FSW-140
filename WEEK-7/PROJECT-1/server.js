const express = require('express')
const app = express()
const port = 9000

app.use(express.json())

app.use('/footballPlayers', require('./routes'))
app.use('/footballCoaches', require('./coach'))
app.use('/Leaders', require('./Topplayers'))

app.listen(port, ()=>{
    console.log(`App is running on Port ${port}`)
})

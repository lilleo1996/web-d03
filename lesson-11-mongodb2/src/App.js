const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const cors = require('cors')

const usersRoute = require("./routes/users.route")

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(cors())

// what happen if change mongodb to http
mongoose.connect('mongodb://localhost:27017/web-d03-db', function(err) {
  if (err) {
    console.log(`Cannot connect to mongodb: ${err.toString()}`)
  }
})

app.use('/users', (req, res, next) => {
  console.log('The request recieved at: ', new Date())
  next()
})

app.use('/users', usersRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
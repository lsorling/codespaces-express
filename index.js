const express = require('express')
const app = express()
const port = 3000
let words = ["hello", "crazy", "ditch"]

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'))

app.get('/query', (req, res) => {
  let output = '<h1>My Words</h1><ul>'
  words.forEach(item => {
    output = output + '<li>' + item + '</li>'
  })
  output = output + '</ul>'
  res.send(output)
})

app.post('/add', urlencodedParser, (req, res) => {
  const newword = req.body.newword
  console.log("recvd this=" + newword)
  words.push(newword)
  res.send("got a post message")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

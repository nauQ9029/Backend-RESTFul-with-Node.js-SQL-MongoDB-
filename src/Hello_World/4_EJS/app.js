const express = require('express')
const app = express()
require('dotenv').config()

// Check if the environment variables are loaded
// console.log('>>> check env: ', process.env)

const port = process.env.PORT|| 3000;
const hostname = process.env.HOST_NAME;

// Congif template engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

// Default route
app.get('/', (req, res) => {
  res.send('Goodbye, World!')
})

// Custom route
app.get('/wtf', (req, res) => {
  res.send('<h1>Goodbye, World! Message sent from ground zero of the third impact.</h1>')
})

// Custom route w/ EJS
app.get('/wtf2', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})

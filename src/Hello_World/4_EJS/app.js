const express = require('express')
const app = express()
const port = 8080 // port -> hardcoded

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

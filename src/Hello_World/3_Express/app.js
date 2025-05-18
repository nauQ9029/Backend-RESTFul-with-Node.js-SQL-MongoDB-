const express = require('express')
const app = express()
const port = 8080

// Default route
app.get('/', (req, res) => {
  res.send('Goodbye, World!')
})

// Custom route
app.get('/wtf', (req, res) => {
  res.send('<h1>Goodbye, World! Message sent from ground zero of the third impact.</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

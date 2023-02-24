// Imports
const express = require('express')
const fs = require('fs')

// Dashboard erstellen
const app = express()

app.enable('trust proxy')
app.set('etag', false)
app.use(express.static(__dirname + '/dashboard'))

// Handler
app.get('/', async (req, res) => {
  res.redirect('wip')
  Console.log(`New Request ${req.method}, ${req.url}`)
})

app.get('/wip', async (req, res) => {
  res.sendFile('./dashboard/html/wip.html', {root: __dirname})
})

// Dashboard starten
app.listen(80)
Console.log(`Dashboard is Online and listens on Port: ${process.env.port}`)
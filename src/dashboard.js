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
})

app.get('/wip', async (req, res) => {
  //let file = fs.readFileSync("src/dashboard/html/wip.html", { encoding: "utf-8" })
  //res.send(file)
  res.sendFile('./dashboard/html/wip.html', {root: __dirname})
})

// Dashboard starten
app.listen(80)
'use strict'

const express = require('express')
const app = express()
const config = require('./config/config')
const routes = require('./server/routes/routes')
const accessLogging = require('./server/logging/accessLogging')
// const handlebars = require("./server/templating/handlebarsInit")
// app.use(handlebars.initHandlebars)

const exphbs = require('express-handlebars')
const path = require('path')

app.set('views', path.join(__dirname, '/views'))
app.set('layouts', path.join(__dirname, '/views/layouts'))
app.set('partials', path.join(__dirname, '/views/partials'))
app.engine('handlebars', exphbs({
  defaultLayout: 'publicLayout',
  layoutsDir: app.settings.layouts,
  partialsDir: app.settings.partials
}))
app.set('view engine', 'handlebars')
app.use('/static', express.static('./public'))
app.set('case sensitive routing', true)

app.use(accessLogging)
app.use(routes)

app.listen(config.port, function () {
  console.log('Server started and listening on port ' + config.port)
})

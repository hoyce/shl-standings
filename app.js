'use strict'

const express = require('express')
const app = express()
const config = require('./config/config')
const routes = require('./server/routes/routes')
const accessLogging = require('./server/logging/accessLogging')
const Handlebars = require('handlebars')
const hbs = require('./server/templating/handlebarsInit')
const sass = require('./server/sass/sass')

sass.sassMiddleware(app)
hbs.initHandlebars(app)

Handlebars.registerHelper('inc', function (value, options) {
  return parseInt(value) + 1
})

Handlebars.registerHelper('isBif', function (value, options) {
  return value === 'BIF'
})

app.use('/static', express.static('./public'))
app.set('case sensitive routing', true)
app.use(accessLogging)
app.use(routes)

app.listen(config.port, function () {
  console.log('Server started and listening on port ' + config.port)
})

'use strict'

const exphbs = require('express-handlebars')
const path = require('path')

let initHandlebars = function(app) {
  app.set('views', path.join(__dirname, '/../../views'))
  app.set('layouts', path.join(__dirname, '/../../views/layouts'))
  app.set('partials', path.join(__dirname, '/../../views/partials'))
  app.engine('handlebars', exphbs({
    defaultLayout: 'publicLayout',
    layoutsDir: app.settings.layouts,
    partialsDir: app.settings.partials
  }))
  app.set('view engine', 'handlebars')
  return app
}

module.exports.initHandlebars = initHandlebars

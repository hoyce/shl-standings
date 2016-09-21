'use strict'

const sass = require('node-sass-middleware')
const path = require('path')
const rootPath = path.dirname(require.main.filename)

const cssPath = path.join(rootPath, 'public/css')
console.log('Running SASS Middleware on ' + cssPath)
console.log('src: ', path.join(rootPath, 'public/css'))

let sassMiddleware = function (app) {
  app.use(sass({
    src: path.join(rootPath, 'public/css'),
    dest: path.join(rootPath, 'public/css'),
    prefix: '/static/css',
    debug: true,
    force: true,
    outputStyle: 'compressed'
  }))
}

module.exports.sassMiddleware = sassMiddleware

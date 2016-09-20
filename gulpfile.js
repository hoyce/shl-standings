'use strict'

const gulp = require('gulp')

gulp.task('default', ['moveBootstrap', 'moveJquery'], function () {

})

gulp.task('moveBootstrap', function () {
  gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./public/css/bootstrap/'))

  gulp.src('./node_modules/bootstrap/dist/css/bootstrap-theme.min.css')
    .pipe(gulp.dest('./public/css/bootstrap/'))

  gulp.src('./node_modules/bootstrap/dist/fonts/**/*.{ttf,woff*,eof,svg}')
    .pipe(gulp.dest('./public/css/fonts/'))

  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./public/js/bootstrap/'))
})

gulp.task('moveJquery', function () {
  gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./public/js/jquery/'))
})

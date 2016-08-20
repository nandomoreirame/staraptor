'use strict';

var gulp = require('gulp');
var config = require('../gulp.config.js');

gulp.task('watch', ['server'], () => {
  gulp.watch(`${config.source.sass}/**/*.{sass,scss}`, ['sass']);
  gulp.watch(`${config.source.templates}/**/*.njk`, ['templates']);
  gulp.watch(`${config.source.javascripts}/**/*.js`, ['scripts', 'scripts:plugins']);
  gulp.watch(`${config.source.images}/**/*`, ['images']);
});

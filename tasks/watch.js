'use strict';

var gulp = require('gulp');
var config = require('../gulp.config.js');

gulp.task('watch', function() {
  gulp.watch(config.source.sass + '**/*', ['sass']);
  gulp.watch(config.source.templates + '**/*', ['templates']);
  gulp.watch(config.source.javascripts + '**/*', ['js', 'js:plugins']);
});

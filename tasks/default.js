'use strict';

var gulp = require('gulp');

gulp.task('default', [
  'templates',
  'sass',
  'scripts',
  'scripts:vendor',
  'images',
  'watch'
]);

gulp.task('build', [
  'templates',
  'sass:min',
  'scripts:min',
  'images'
]);

'use strict';

var gulp = require('gulp');
var tasks = [
  'templates',
  'sass',
  'scripts',
  'scripts:vendor',
  'images',
  'watch'
];

gulp.task('default', tasks);

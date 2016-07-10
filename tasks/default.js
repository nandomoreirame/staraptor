'use strict';

var gulp = require('gulp');
var tasks = [
  'templates',
  'sass',
  'js',
  'js:plugins',
  'watch'
];

gulp.task('default', tasks);

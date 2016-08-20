'use strict';

var gulp   = require('gulp');
var config = require('../gulp.config.js');
var $      = require('gulp-load-plugins')();

gulp.task('fonts', () => {
  return gulp.src(`${config.source.fonts}/**/*`)
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe(gulp.dest(config.dist.fonts))
    .pipe($.plumber.stop());
});

'use strict';

var gulp   = require('gulp');
var config = require('../gulp.config.js');
var $      = require('gulp-load-plugins')();

gulp.task('images', function () {
  return gulp.src(config.source.images + '/**/*')
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe($.cache($.imagemin()))
    .pipe($.size({ title: 'Build images', showFiles: true }))
    .pipe(gulp.dest(config.dist.images))
    .pipe($.plumber.stop());
});

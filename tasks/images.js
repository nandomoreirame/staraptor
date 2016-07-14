'use strict';

var gulp   = require('gulp');
var config = require('../gulp.config.js');

var plumber  = require('gulp-plumber');
var size     = require('gulp-size');
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {
  gulp.src([ config.source.images + '*' ])
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(size({ title: 'Build main.js', showFiles: true }))
    .pipe(gulp.dest(config.dist.images))
    .pipe(plumber.stop());
});

'use strict';

var gulp   = require('gulp');
var config = require('../gulp.config.js');

var plumber  = require('gulp-plumber');
var size     = require('gulp-size');
var include  = require('gulp-include');
var rename   = require('gulp-rename');
var prettify = require('gulp-jsbeautifier');
var uglify   = require('gulp-uglify');

gulp.task('js', function () {
  gulp.src([ config.source.javascripts + 'main.js' ])
    .pipe(plumber())
    .pipe(include()).on('error', console.log)
    .pipe(prettify({
      indent_level: 2
    }))
    .pipe(size({ title: 'Build main.js', showFiles: true }))
    .pipe(gulp.dest(config.dist.javascripts))
    .pipe(plumber.stop());
});

gulp.task('js:plugins', function () {
  gulp.src([ config.source.javascripts + 'plugins.js' ])
    .pipe(plumber())
    .pipe(include()).on('error', console.log)
    .pipe(prettify({
      indent_level: 2
    }))
    .pipe(size({ title: 'Build plugins.js', showFiles: true }))
    .pipe(gulp.dest(config.dist.javascripts))
    .pipe(rename({suffix: ".min"}))
    .pipe(uglify())
    .pipe(size({ title: 'Rename and Minify plugins.js', showFiles: true }))
    .pipe(gulp.dest(config.dist.javascripts))
    .pipe(plumber.stop());
});

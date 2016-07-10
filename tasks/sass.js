'use strict';

var gulp    = require('gulp');
var bourbon = require('node-bourbon');
var config  = require('../gulp.config.js');

var sass      = require('gulp-sass');
var size      = require('gulp-size');
var plumber   = require('gulp-plumber');
var prefixer  = require('gulp-autoprefixer');
var rename    = require('gulp-rename');
var cssnano   = require('gulp-cssnano');
var combineMq = require('gulp-combine-mq');
var prettify  = require('gulp-jsbeautifier');

gulp.task('sass', function() {
  gulp.src(config.source.sass + '**/*.{scss,sass}')
    .pipe(plumber())
    .pipe(sass({ includePaths: bourbon.includePaths }))
    .pipe(combineMq())
    .pipe(prefixer({ browsers: config.autoprefixer_browsers }))
    .pipe(prettify({
      indent_size: 2,
      indent_char: ' ',
    }))
    .pipe(size({ title: 'Build Stylesheets', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dist.css))
    .pipe(plumber.stop());
});

gulp.task('sass:min', function() {
  gulp.src(config.source.sass + '**/*.{scss,sass}')
    .pipe(plumber())
    .pipe(sass({ includePaths: bourbon.includePaths }))
    .pipe(combineMq())
    .pipe(prefixer({ browsers: config.autoprefixer_browsers }))
    .pipe(cssnano())
    .pipe(size({ title: 'Build and Minify Stylesheets', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dist.css))
    .pipe(plumber.stop());
});

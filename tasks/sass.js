'use strict';

var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();
var bourbon = require('node-bourbon');
var config  = require('../gulp.config.js');

var _includePaths = [
  bourbon.includePaths,
  'node_modules',
  'source/bower',
  'source/sass'
];

gulp.task('sass', function() {
  gulp.src([config.source.sass + '/**/*.{scss,sass}'])
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe($.sass({ includePaths: _includePaths }))
    .pipe($.combineMq())
    .pipe($.autoprefixer({ browsers: ['last 5 versions'] }))
    .pipe($.jsbeautifier({
      indent_size: 2,
      indent_char: ' ',
    }))
    .pipe($.size({ title: 'Build Stylesheets', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dist.css))
    .pipe($.plumber.stop());
});

gulp.task('sass:min', function() {
  gulp.src([config.source.sass + '/**/*.{scss,sass}'])
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe($.sass({ includePaths: _includePaths }))
    .pipe($.combineMq())
    .pipe($.autoprefixer({ browsers: ['last 5 versions'] }))
    .pipe($.cssnano())
    .pipe($.size({ title: 'Build and Minify Stylesheets', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dist.css))
    .pipe($.plumber.stop());
});

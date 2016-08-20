'use strict';

var gulp   = require('gulp');
var config = require('../gulp.config.js');
var $      = require('gulp-load-plugins')();

gulp.task('scripts', () => {
  gulp.src([ `${config.source.javascripts }/main.js` ])
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe($.include({
      extensions: 'js',
      includePaths: [
        'node_modules',
        'source/bower',
        'source/javascripts'
      ]
    }))
    .pipe($.jsbeautifier({
      indent_level: 2
    }))
    .pipe($.size({ title: 'scripts main.js', showFiles: true }))
    .pipe(gulp.dest(config.dist.javascripts))
    .pipe($.plumber.stop());
});

gulp.task('scripts:vendor', () => {
  gulp.src([ `${config.source.javascripts}/vendor.js` ])
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe($.include({
      extensions: 'js',
      includePaths: [
        'node_modules',
        'source/bower',
        'source/javascripts'
      ]
    }))
    .pipe($.jsbeautifier({
      indent_level: 2
    }))
    .pipe($.size({ title: 'scripts vendor.js', showFiles: true }))
    .pipe(gulp.dest(config.dist.javascripts))
    .pipe($.plumber.stop());
});

gulp.task('scripts:min', () => {
  gulp.src([ `${config.source.javascripts}/*.js` ])
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe($.include({
      extensions: 'js',
      includePaths: [
        'node_modules',
        'source/bower',
        'source/javascripts'
      ]
    }))
    .pipe($.concat('main.min.js'))
    .pipe($.uglify({ mangle: true }))
    .pipe($.size({ title: 'build scripts', showFiles: true }))
    .pipe(gulp.dest(config.dist.javascripts))
    .pipe($.plumber.stop());
});

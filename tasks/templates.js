'use strict';

// To Modularize HTML Using Template Engines and Gulp
// http://zellwk.com/blog/nunjucks-with-gulp/

var gulp = require('gulp');
var config = require('../gulp.config.js');
var render = require('gulp-nunjucks-render');
var prettify = require('gulp-prettify');

gulp.task('templates', function () {
  return gulp.src(config.source.templates + 'pages/**/*.+(html|nunjucks)')
    .pipe(render({
      path: config.source.templates
    }))
    .pipe(prettify({ indent_size: 2 }))
    .pipe(gulp.dest(config.dist.templates));
});

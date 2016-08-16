'use strict';

var gulp   = require('gulp');
var config = require('../gulp.config.js');
var bSync  = require('browser-sync').create();
var reload = bSync.reload;

gulp.task('server', function() {
  bSync.init({
    server: {
      server: config.dist.templates,
      baseDir: config.dist.templates
    }
  });
  gulp.watch(config.dist.templates + "/**/*.{html,css,js}").on("change", reload);
});

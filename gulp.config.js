'use strict';

var notify = require('gulp-notify');

var config = {
  source: {
    templates: 'source/templates',
    sass: 'source/sass',
    javascripts: 'source/javascripts',
    components: 'source/components',
    images: 'source/images'
  },
  dist: {
    templates: 'dist',
    css: 'dist/assets/css',
    javascripts: 'dist/assets/js',
    images: 'dist/assets/images'
  },
  plumberErrorHandler: {
    errorHandler: notify.onError({
      title: 'Gulp',
      message: 'Error: <%= error.message %>'
    })
  }
};

module.exports = config;

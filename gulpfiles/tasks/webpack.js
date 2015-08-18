var gulp = require('gulp');
var webpack = require('webpack-stream');
var size   = require('gulp-size');
var config = require('../../webpack.config.js');

gulp.task('webpack', ['modernizr'], function() {
  return gulp.src('index.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('dist/'))
    .pipe(size({
      showFiles: true
    }));
});

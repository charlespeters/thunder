var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var size   = require('gulp-size');
var config = require('../config').optimize.js;

gulp.task('optimize', function() {
  return gulp.src(config.src)
    .pipe(uglify())
    .pipe(rename({
       extname: '.min.js'
     }))
    .pipe(gulp.dest(config.dest))
    .pipe(size({
      showFiles: true
    }));
});

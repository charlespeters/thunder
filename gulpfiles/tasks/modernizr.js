var gulp         = require('gulp');
var modernizr    = require('gulp-modernizr');
var config       = require('../config').modernizr;

/**
 *  * Custom Modernizr build
 *   */
gulp.task('modernizr', function() {
    return gulp.src(config.src)
      .pipe(modernizr(config.filename, config.customizr))
      .pipe(gulp.dest(config.dest))
});


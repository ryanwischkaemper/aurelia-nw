var gulp  = require('gulp'),
    paths = require('../paths'),
    gutil = require('gulp-util');

// outputs changes to files to the console
function reportChange(event) {
  gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['run'], function () {
  gulp.watch(paths.app + '**/*.js', ['scripts']).on('change', reportChange);
  gulp.watch(paths.styles + '**/*.less', ['styles']).on('change', reportChange);
  gulp.watch(paths.app + '**/*.html', ['html']).on('change', reportChange);
});

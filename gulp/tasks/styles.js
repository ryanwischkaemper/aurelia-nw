var gulp       = require('gulp'),
    paths      = require('../paths'),
    config     = require('../config'),
    args       = require('../args'),
    isRelease  = args.isRelease,
    gulpIf     = require('gulp-if'),
    sourcemaps = require('gulp-sourcemaps'),
    csso       = require('gulp-csso'),
    less       = require('gulp-less');

gulp.task('styles', function () {
  return gulp.src(paths.styles + 'main.less')
    .pipe(gulpIf(!isRelease, sourcemaps.init()))
    .pipe(less())
    .pipe(gulpIf(isRelease, csso()))
    .pipe(gulpIf(!isRelease, sourcemaps.write()))
    .pipe(gulpIf(isRelease, gulp.dest(paths.dist + 'content/styles'), gulp.dest(paths.build + 'content/styles')));
});


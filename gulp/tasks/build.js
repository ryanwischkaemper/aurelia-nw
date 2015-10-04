var gulp        = require('gulp'),
    paths       = require('../paths'),
    config      = require('../config'),
    args        = require('../args'),
    isRelease   = args.isRelease,
    sourcemaps  = require('gulp-sourcemaps'),
    plumber     = require('gulp-plumber'),
    changed     = require('gulp-changed'),
    to5         = require('gulp-babel'),
    gulpIf      = require('gulp-if'),
    uglify      = require('gulp-uglify'),
    minifyHtml  = require('gulp-minify-html'),
    runSequence = require('run-sequence'),
    assign      = Object.assign || require('object.assign');

gulp.task('build', function (done) {
  return runSequence(
    'clean',
    ['scripts', 'html', 'styles'],
    done
  );
});

gulp.task('scripts', function () {
  return gulp.src(paths.app + '**/*.js')
    .pipe(plumber())
    .pipe(gulpIf(!isRelease, changed(paths.build + 'app', {extension: '.js'})))
    .pipe(gulpIf(!isRelease, sourcemaps.init({loadMaps: true})))
    .pipe(to5(assign({}, config.babelConfig, {modules: 'system'})))
    .pipe(gulpIf(isRelease, uglify(config.uglifyConfig)))
    .pipe(gulpIf(!isRelease, sourcemaps.write({includeContent: true})))
    .pipe(gulpIf(isRelease, gulp.dest(paths.dist + 'app'), gulp.dest(paths.build + 'app')));
});

gulp.task('html', function () {
  return gulp.src(paths.app + '**/*.html')
    .pipe(gulpIf(!isRelease, changed(paths.build + 'app', {extension: '.html'})))
    .pipe(gulpIf(isRelease, minifyHtml(config.minifyHtmlConfig)))
    .pipe(gulpIf(isRelease, gulp.dest(paths.dist + 'app'), gulp.dest(paths.build + 'app')));
});




var gulp        = require('gulp'),
    runSequence = require('run-sequence'),
    jeditor     = require('gulp-json-editor'),
    gulpReplace = require('gulp-replace'),
    fs          = require('fs'),
    args        = require('../args'),
    paths       = require('../paths'),
    bump        = require('gulp-bump'),
    NwBuilder   = require('node-webkit-builder'),
    config      = require('../config'),
    gutil       = require('gulp-util');

gulp.task('prepare-release', function (done) {
  return runSequence(
    'build',
    'bump-version',
    ['npm-dependencies', 'jspm-dependencies', 'copy-index', 'prep-system-config'],
    'prep-nw-properties',
    done
  );
});

gulp.task('bump-version', function () {
  return gulp.src('./package.json')
    .pipe(bump({type: args.bump})) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('prep-nw-properties', function () {
  return gulp.src(paths.dist + 'package.json')
    .pipe(jeditor(function (json) {

      json.window.toolbar = false;
      json.window.frame = false;

      delete json.devDependencies;

      return json;
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('copy-index', function () {
  return gulp.src('./index.html')
    .pipe(gulpReplace('build/content/styles/main.css', 'content/styles/main.css'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('prep-system-config', function () {
  return gulp.src('./config.js')
    .pipe(gulpReplace('"build/app/*.js",', '"app/*.js",'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('npm-dependencies', function () {
  var buffer, packages, keys;

  buffer = fs.readFileSync('./package.json');
  packages = JSON.parse(buffer.toString());
  keys = [];

  for (var key in packages.dependencies) {
    keys.push('./node_modules/' + key + '/**/*');
  }

  return gulp.src(keys, {base: './'})
    .pipe(gulp.dest(paths.dist));
});

//TODO: Bundle only what is needed
gulp.task('jspm-dependencies', function () {
  return gulp.src('./jspm_packages/**/*', {base: './'})
    .pipe(gulp.dest(paths.dist));
});

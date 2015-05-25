var gulp            = require('gulp'),
		paths           = require('../paths'),
		config          = require('../config'),
		compilerOptions = config.babelConfig,
		sourcemaps      = require('gulp-sourcemaps'),
		plumber         = require('gulp-plumber'),
		changed         = require('gulp-changed'),
		to5             = require('gulp-babel'),
		runSequence     = require('run-sequence'),
		assign          = Object.assign || require('object.assign');

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
		.pipe(changed(paths.build + 'app', {extension: '.js'}))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(to5(assign({}, compilerOptions, {modules: 'system'})))
		.pipe(sourcemaps.write({includeContent: true}))
		.pipe(gulp.dest(paths.build + 'app'));
});

gulp.task('html', function () {
	return gulp.src(paths.app + '**/*.html')
		.pipe(changed(paths.build + 'app', {extension: '.html'}))
		.pipe(gulp.dest(paths.build + 'app'));
});


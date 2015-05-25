var gulp = require('gulp'),
	paths = require('../paths'),
	config = require('../config'),
	compilerOptions = config.babelConfig,
	sourcemaps = require('gulp-sourcemaps'),
	plumber = require('gulp-plumber'),
	to5 = require('gulp-babel'),
	assign = Object.assign || require('object.assign');

gulp.task('build-scripts', function(){
	return gulp.src(paths.src + '**/*.js')
		.pipe(plumber())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(to5(assign({}, compilerOptions, {modules: 'system'})))
		.pipe(sourcemaps.write({includeContent: true}))
		.pipe(gulp.dest(paths.build));
});

gulp.task('build-html', function(){
	return gulp.src(paths.src + '**/*.html')
		.pipe(gulp.dest(paths.build));
});


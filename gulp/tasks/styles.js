var gulp  = require('gulp'),
		paths = require('../paths'),
		less  = require('gulp-less');

gulp.task('styles', function () {
	return gulp.src(paths.styles + 'main.less')
		.pipe(less())
		.pipe(gulp.dest(paths.build + 'content/styles'));
});


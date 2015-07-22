var gulp      = require('gulp'),
		NwBuilder = require('nw-builder'),
    config = require('../config'),
    gutil = require('gulp-util');

gulp.task('run', ['build'], function (cb) {
	var nw = new NwBuilder(config.nwBuilderConfig);

  nw.on('log', gutil.log);

	nw.run();

  cb()
});


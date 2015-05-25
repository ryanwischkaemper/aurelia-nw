var gulp      = require('gulp'),
		NwBuilder = require('node-webkit-builder'),
		paths     = require('../paths');

gulp.task('run', ['build'], function (cb) {
	var nw = new NwBuilder({
		files: paths.root + '**/**',
		platforms: ['win64'],
		buildDir: paths.temp,
		cacheDir: paths.nwCache,
		version: '0.12.0'
	});

	nw.run(cb);

	return nw;
});

var gulp = require('gulp'),
	NwBuilder = require('node-webkit-builder'),
	paths = require('../paths');

gulp.task('run', function(cb){
	var nw = new NwBuilder({
		appDir: paths.src,
		files: paths.src + '**/**',
		platforms: ['win64'],
		buildDir: paths.temp,
		cacheDir: paths.nwCache,
		version: '0.12.0'
	});

	nw.run(cb);

	return nw;
});

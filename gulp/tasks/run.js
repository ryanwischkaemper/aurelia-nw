var gulp = require('gulp'),
	NwBuilder = require('nw-builder'),
	config = require('../config'),
	gutil = require('gulp-util'),
	os = require('os');

gulp.task('run', [ 'build' ], function(cb) {
	var platform = {
		'linux' : 'linux',
		'darwin' : 'osx',
		'win32' : 'win'
	}[os.platform()]
	var arch = {
		'x64' : '64',
		'ia32' : '32'
	}[os.arch()];
	platform += arch;

	if ([ 'win32', 'win64', 'osx32', 'osx64', 'linux32', 'linux64' ]
			.indexOf(platform) === -1) {
		console.error('unknown platform', os.platform(), os.arch());
		process.exit(1);
	}

	config.nwBuilderConfig.platforms = [ platform ];

	var nw = new NwBuilder(config.nwBuilderConfig);

	nw.on('log', gutil.log);

	nw.run();

	cb()
});

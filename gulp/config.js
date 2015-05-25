var paths     = require('./paths'),
    isRelease = require('./args').isRelease;

module.exports = {
  babelConfig: {
    modules: 'system',
    moduleIds: false,
    comments: false,
    compact: false,
    stage: 2,
    optional: [
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  minifyHtmlConfig: {
    empty: true,
    spare: true,
    quotes: true
  },
  uglifyConfig: {
    mangle: true
  },
  nwBuilderConfig: {
    files: isRelease ? paths.dist + '**/**' : paths.root + '**/**',
    platforms: ['win64'], // win32,win64,osx32,osx64,linux32,linux64
    buildDir: paths.release,
    cacheDir: paths.nwCache,
    buildType: 'versioned',
    version: '0.12.0'
  }
};


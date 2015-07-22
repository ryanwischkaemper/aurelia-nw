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
    platforms: ['linux', 'osx', 'win'],  // See https://github.com/mllrsohn/nw-builder#optionsplatforms
    buildDir: paths.release,
    cacheDir: paths.nwCache,
    buildType: 'versioned',
    version: '0.12.0'
  }
};


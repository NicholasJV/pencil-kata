// Karma configuration
// Generated on Tue Mar 28 2017 18:18:32 GMT-0400 (EDT)

module.exports = function(config) {

  var sourcePreprocessors = ['coverage'];
  function isDebug(argument) {
      return argument === '--debug';
  }
  if (process.argv.some(isDebug)) {
      sourcePreprocessors = [];
  }

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/*.js',
      'test/*_spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'html', 'coverage'],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // source files that you want generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/*.js': sourcePreprocessors
    },


    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'test/coverage/'
    },

    htmlReporter: {
      outputFile: 'test/karmaUnitTests.html'
    },


    // plugins: ['karma-spec-reporter'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      // uncomment to enable other browser launchers
      // (these three are already installed by default):
      'Chrome',
      // 'Firefox',
      // 'Safari',
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

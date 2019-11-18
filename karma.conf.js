// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-remap-istanbul'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-coverage'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    angularCli: {
      environment: 'dev'
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    coverageReporter: {
      reporters: [
          // reporters not supporting the `file` property
          // { type: 'html', subdir: 'report-html' },  // Over transpiled JS
          {type: 'lcov', subdir: 'report-lcov'},  // Over transpiled JS
          // reporters supporting the `file` property, use `subdir` to directly output them in the `dir` directory
          {type: 'json', subdir: './test-raw-reports', file: 'coverage.json'},
          {type: 'cobertura', subdir: './test-raw-reports', file: 'cobertura.txt'},
          {type: 'lcovonly', subdir: './test-raw-reports', file: 'report-lcovonly.txt'},
          {type: 'teamcity', subdir: './test-raw-reports', file: 'teamcity.txt'},
          {type: 'text', subdir: './test-raw-reports', file: 'text.txt'},
          {type: 'text-summary', subdir: './test-raw-reports', file: 'text-summary.txt'},
      ]
    },
    reporters: ['progress', 'kjhtml', 'coverage', 'karma-remap-istanbul'],
    port: 9876,
    colors: true,
    // level of logging: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS', 'Chrome'],
    singleRun: true
  });
};

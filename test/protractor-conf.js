var ScreenShotReporter = require('protractor-screenshot-reporter');

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function () {
    // Add a screenshot reporter and store screenshots to `$CIRCLE_ARTIFACTS`.
    jasmine.getEnv().addReporter(new ScreenShotReporter({
      baseDirectory: process.env.CIRCLE_ARTIFACTS
    }));
  }
};

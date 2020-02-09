// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var outputDir = 'e2e/test-results/';
var log4js = require('log4js');

var reporter = new HtmlScreenshotReporter({
  dest: outputDir,
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: true,
  filename: 'E2ETestResults.html'
});

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 110000,
  specs: [
    'tests/sendEmailSpec.js'
  ],
  suites: {
    
  },
  capabilities: {
    'browserName': 'chrome',
     'chromeOptions': { },
     'host': 'http://quickfuseapps.com/'
  },
  directConnect: true,
  baseUrl: 'http://quickfuseapps.com/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000,
    print: function () { }
  },
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
      log4js.configure({
        appenders:{protractorLog4js:{type:'console'},protractorLog4jsFile:{type:'file',filename:'./logs/ExecutiongLog.log'}},
        categories: { default: { appenders: ['protractorLog4js'], level: 'info' } }
    });
    });
  },
  onPrepare() {
    // require('ts-node').register({
    //   project: 'e2e/tsconfig.e2e.json'
    // });
    //jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    return browser.getProcessedConfig().then(function(config){
      browser.hostname= config.capabilities.host;
      browser.logger = log4js.getLogger('protractorLog4js');
    }),
  
    jasmine.getEnv().addReporter(reporter);
  }
};
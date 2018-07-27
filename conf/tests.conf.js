require('dotenv').config()

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: ['./tests/specs/*.spec.js'],
  exclude: [],

  capabilities: [
    {
      browser: 'chrome',
      browser_version: '66.0',
      platform: 'Mac',
      os: 'OS X',
      resolution: '1920x1080',
      os_version: 'High Sierra',
      project: 'Monocle',
      name: 'Monocle e2e Tests',
      build: 'Monocle'
    }
  ],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'http://the-internet.herokuapp.com',
  waitforTimeout: 90000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',

  framework: 'mocha',
  mochaOpts: {
    timeout: 30000,
    ui: 'bdd',
    compilers: ['js:babel-register']
  }
}

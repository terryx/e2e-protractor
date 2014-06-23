exports.config = {

    specs: [
        'test/e2e/**/*.spec.js'
    ],

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:9000',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 10000,
        isVerbose: true,
        includeStackTrace: true
    },

    params: {
        login: {
            email: 'admin@gmail.com',
            password: '1234'
        }
    }


}

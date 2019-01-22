import { browser } from 'protractor';

export const config = {
    SELENIUM_PROMISE_MANAGER: false,
    dirrectConnect: true,

    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
    },

    framework: 'jasmine2',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 20000,
        stopSpecOnExpectationFailure: true
    },
    specs: ['./specs/*-spec.js'],
    seleniumAddress: "http://localhost:4444/wd/hub",
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {args: ['--no-sandbox']}
    }
};

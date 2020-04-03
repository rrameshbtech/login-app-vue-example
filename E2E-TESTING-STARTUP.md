# E2E testing guide

This document explains about how to do e2e test for a simple login application using below libraries.

1. Mocha - Testing Platform
2. Puppeteer - NodeJS library for headLess browser
3. Chai - Assertion library

## Starting Login Application

* Install dependencies.`npm install`
* Go to `server` folder. `cd server`
* Install server dependencies. `npm install`
* Start appliation. `cd .. && npm start`

Check the application is working as expected by navigating to the url shown after the execution of the previous command.

#### Below credentials are valid
Email: `test@thoughtworks.com`

Password: `admin123`

## Creating testing application

### Inital Setup
* Go outside your login application. `cd ..` 
* Create new folder for testing application. `mkdir login-app-e2e-tests && cd login-app-e2e-tests`
* Init git. `git init`
* Add git ignore file. `echo "/node_modules" > .gitignore`
* Init node application. `npm init -y`
* Install dependencies. `npm i mocha chai puppeteer --save`. This step will take a while as puppeteer downloads `Chromium`.

### First Test
* Create tests folder. `mkdir tests && cd tests`
* Create & open your test file. `touch login-test.js`. Below code needs to be added to the test file.
* Import dependencies.
```
const puppeteer = require('puppeteer');
const { expect } = require('chai');
```
* Add global members for options, url & browser.
```
const opts = {
    headless: true,
    slowMo: 100,
    timeout: 0
};
const applicationUrl = 'http://localhost:8080'; // should be replaced with url shown when you start the app
let browser;
```
* Create describe block. `describe` is the top level logical grouping of tests.
* Add before & after hooks.
```
before(async ()=>{
    browser = await puppeteer.launch(opts);
});

after(()=>{
    browser.close();
});
```
* Add first test. Mocha is using `it` create a test.
```
it('should load login page', async ()=>{
    const titleSelector = "#login-title";
    const submitSelector = "#login-button";

    page = await browser.newPage();
    await page.goto(applicationUrl);

    const title = await page.$(titleSelector);
    const submit = await page.$(submitSelector);

    const titleText = await page.evaluate(element => element.innerText, title);
    const submitText = await page.evaluate(element => element.value, submit);
    
    expect(titleText).equals("Login here");
    expect(submitText).equals("Login");

    return await page.close();
});
```

### Running Tests
* Add test command to `package.json`. Use the below script for `test` command.
`mocha --timeout 0 tests/login-test.js`
* Goto terminal & run tests.
`npm test`
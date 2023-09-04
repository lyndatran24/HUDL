// Set up Selenium webdriver
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const { validCredentials } = require('./constants.js')
const LoginPage = require('./loginPage.js');

//Verify user can login with a valid username and valid password
async function validLoginTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await LoginPage.testSetup(driver);

        // Enter username and password
        await driver.findElement(By.id('email')).sendKeys(validCredentials.email);
        await driver.findElement(By.id('password')).sendKeys(validCredentials.password);

        // Click the Continue button
        await driver.findElement(By.id('logIn')).click();

         // Wait for global header to finish loading
        const element = await driver.wait(until.elementLocated(By.css("[data-qa-id='gloabl-navbar']")), 10000);
        
        //Assert login is successful
        const currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl,'https://www.hudl.com/home');

    } finally {
        await LoginPage.testTearDown(driver);
    }
} 

validLoginTest();
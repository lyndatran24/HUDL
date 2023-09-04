// Set up Selenium webdriver
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const { invalidPasswordCredentials } = require('./constants.js')
const LoginPage = require('./loginPage.js');

//Verify user can not login with a valid username and invalid password
async function invalidPasswordLoginTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await LoginPage.testSetup(driver);
        
        // Enter valid username and invalid password
        await driver.findElement(By.id('email')).sendKeys(invalidPasswordCredentials.email);
        await driver.findElement(By.id('password')).sendKeys(invalidPasswordCredentials.password);

        // Click the Continue button
        await driver.findElement(By.id('logIn')).click();
        
        // Wait for error to finish loading
        //const element = await driver.wait(until.elementLocated(By.className("error-message")), 10000);
        await driver.sleep(5000);

        //Assert login is unsuccessful
        const errorMessage = await driver.findElement(By.className("error-message")).getAttribute("innerHTML");
        assert.equal(errorMessage,"We don't recognize that email and/or password");
        
    } finally {
        await LoginPage.testTearDown(driver);
    }
} 

invalidPasswordLoginTest();

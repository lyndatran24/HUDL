// Set up Selenium webdriver
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const { invalidUserCredentials } = require('./constants.js')
const LoginPage = require('./loginPage.js');

//Verify user can not login with a invalid username
async function invalidUserLoginTest() {
    
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await LoginPage.testSetup(driver);
        
        // Enter username and password
        await driver.findElement(By.id('email')).sendKeys(invalidUserCredentials.email);
        await driver.findElement(By.id('password')).sendKeys(invalidUserCredentials.password);

        // Click Continue button
        await driver.findElement(By.id('logIn')).click();
        await driver.sleep(5000);

        //Assert login is unsuccessful
        const errorMessage = await driver.findElement(By.className("error-message")).getAttribute("innerHTML");
        assert.equal(errorMessage,"We don't recognize that email and/or password");
        
    } finally {
        await LoginPage.testTearDown(driver);
    }
} 

invalidUserLoginTest();
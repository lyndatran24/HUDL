// Set up Selenium webdriver
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const { blankCredentials } = require('./constants.js')
const LoginPage = require('./loginPage.js');

//Verify required field validation
async function requiredFields() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await LoginPage.testSetup(driver);

        // Enter username and password
        await driver.findElement(By.id('email')).sendKeys(blankCredentials.email);
        await driver.findElement(By.id('password')).sendKeys(blankCredentials.password);

        // Click Continue button
        await driver.findElement(By.id('logIn')).click();

        //Assert login is unsuccessful and Required Field messaging appears
        const errorMessage = await driver.findElement(By.className("error-message")).getAttribute("innerHTML");
        assert.equal(errorMessage,"Please fill in all of the required fields");
        
    } finally {
        await LoginPage.testTearDown(driver);
    }
} 

requiredFields();

// Set up Selenium webdriver
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const LoginPage = require('./loginPage.js');

//Verify "Forgot Password" link functionality
async function forgotPasswordLinkNavigation() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await LoginPage.testSetup(driver);

        // Find Forgot Password link and click
        await driver.findElement(By.id('forgot-password')).click();

        const resetPageMessage = await driver.findElement(By.id('email-reset-help')).getAttribute("innerHTML");
        assert.equal(resetPageMessage,"We need to verify it's you. You'll receive an email with a verification code to reset your password.");
        
    } finally {
        await LoginPage.testTearDown(driver);
    }
} 

forgotPasswordLinkNavigation();

// Set up Selenium webdriver
const { Builder, By, Key, until } = require('selenium-webdriver');
const { validCredentials, invalidUserCredentials, invalidPasswordCredentials, blankCredentials } = require('./constants.js')

class LoginPage {

    constructor(driver) {
        this.continueButton = By.id('logIn');
    }
   
    //Test setup
    static async testSetup(driver) {
        // Navigate to hudl homepage
        await driver.get('http://hudl.com/');

        // Find login button and click
        const loginButton = await driver.findElement(By.css("[data-qa-id='login-select']"));
        await loginButton.click();

        //select HUDL
        const hudlLink = await driver.findElement(By.css("[data-qa-id='login-hudl']"));

        await hudlLink.click();
    }

     // Click the Continue button
    async clickContinueButton(driver) {
        await this.driver.findElement(this.continueButton).click();
      }
        //await continueButton.click();

    //Test teardown
    static async testTearDown(driver){
        await driver.quit();
    }
}

module.exports = LoginPage;
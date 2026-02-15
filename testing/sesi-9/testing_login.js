const { Builder, By, until} = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('Google Search Test', function(){
let driver;
    it('Visit SauceDemo,cek page title & Urutkan Produk dari Z-A', async function () {
        options = new chrome.Options();
        options.addArguments('--incognito');
        options.excludeSwitches(['enable-logging']);

        driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();


        await driver.get('https://www.saucedemo.com/');
        const title = await driver.getTitle();

        assert.strictEqual(title, 'Swag Labs');

        let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        let inputPassword = await driver.findElement(By.xpath('//*[@id="password"]'))
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))
        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await buttonLogin.click()

        let buttonCart = await driver.wait(until.elementLocated(By.xpath('//*[@data-test="shopping-cart-link"]')),
        10000

        );
        await driver.wait(until.elementIsVisible(buttonCart), 10000, 'Shopping cart harus tampil');
    
        let textAppLogo = await driver.findElement(By.className('app_logo'))
            let logotext = await textAppLogo.getText()
            assert.strictEqual(logotext, 'Swag Labs')
            await driver.sleep(2000)
                let dropdownSort = await driver.findElement(By.xpath('//select[@data-test="product-sort-container"]'))
                await dropdownSort.click()
                let option = await driver.findElement(By.xpath('//option[text()="Name (Z to A)"]'));
            
                await option.click();
            await driver.sleep(2000)
        await driver.quit();

});
});

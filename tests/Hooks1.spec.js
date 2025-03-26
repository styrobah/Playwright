const { test, expect } = require('@playwright/test');
const { beforeEach } = require('node:test');


test('Home Page Test',async ({page}) => { 
    await page.goto('https://demoblaze.com/index.html')
    //Login
    await page.locator('#login2').click();
    
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');

    await page.locator('//button[normalize-space()="Log in"]').click();
    //HomePage

    const numberOfArticles = await page.locator('.hrefch').count();
    await expect(numberOfArticles).toBe(9);
    //Logout
    await page.locator('#logout2').click();
});


test.only('Add Product to cart Test',async ({page}) => { 
    await page.goto('https://demoblaze.com/index.html')
    //Login
    await page.locator('#login2').click();
    
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');

    await page.locator('//button[normalize-space()="Log in"]').click();

    //add product to cart
    await page.locator('//a[normalize-space()="Nokia lumia 1520"]').click();
    await page.locator('//a[normalize-space()="Add to cart"]').click();
    page.on('dialog',async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })

    //Logout
    await page.locator('#logout2').click();
    await page.waitForTimeout(5000);


})
const { test, expect } = require('@playwright/test');
const { beforeEach } = require('node:test');
let page;

test.beforeEach(async ({browser}) =>  {
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/index.html')
    //Login
    await page.locator('#login2').click();
    
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');

    await page.locator('//button[normalize-space()="Log in"]').click();
});

test.afterEach(async ({})=>{
    await page.locator('#logout2').click();
})

test('Home Page Test',async ({page}) => { 
    
    //HomePage
    const numberOfArticles = await page.locator('.hrefch').count();
    await expect(numberOfArticles).toBe(9);
    
});


test('Add Product to cart Test',async ({page}) => { 
    //add product to cart
    await page.locator('//a[normalize-space()="Nokia lumia 1520"]').click();
    await page.locator('//a[normalize-space()="Add to cart"]').click();
    page.on('dialog',async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
})
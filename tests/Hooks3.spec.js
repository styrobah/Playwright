const { test, expect } = require('@playwright/test');
const { Console } = require('console');
const { beforeEach } = require('node:test');
let page;

test.beforeAll(async ({browser}) =>  {
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/index.html')
    //Login
    await page.locator('#login2').click();
    
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');

    await page.locator('//button[normalize-space()="Log in"]').click();
});

test.afterAll(async ({})=>{
    await page.locator('#logout2').click();
})

test('Home Page Test',async ({page}) => { 
    
    //HomePage
    await page.waitForSelector('.hrefch', { state: 'visible', timeout: 60000 });
    const numberOfArticles = await page.locator('.hrefch').count();
    console.log(numberOfArticles);
    await expect(numberOfArticles).toBe(9);
    
});


test('Add Product to cart Test',async ({page}) => { 
    //add product to cart
    await page.waitForSelector('//a[normalize-space()="Nokia lumia 1520"]', { state: 'visible' });
    await page.locator('//a[normalize-space()="Nokia lumia 1520"]').click();
    await page.locator('//a[normalize-space()="Add to cart"]').click();
    page.on('dialog',async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
})
const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page })=> {

    await page.goto('https://www.demoblaze.com/index.html');

    let pageTitle = await page.title();
    console.log('Page title is: ', pageTitle);
    
    await expect(page).toHaveTitle('STORE');

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();
});
const { test, expect } = require('@playwright/test');

test('Mouse hover',async ({page}) => { 
    await page.goto('http://testautomationpractice.blogspot.com/');

    await page.locator('.dropbtn').hover();

    await page.waitForTimeout(5000);


});

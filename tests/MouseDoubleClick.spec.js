const { test, expect } = require('@playwright/test');

test('Mouse double click',async ({page}) => { 
    await page.goto('http://testautomationpractice.blogspot.com/');

    await page.locator('//button[normalize-space()="Copy Text"]').dblclick();

    await expect(page.locator('#field2')).toHaveValue("Hello World!");

    await page.waitForTimeout(5000);


});

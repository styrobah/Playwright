const { test, expect } = require('@playwright/test');

test('Mouse right click',async ({page}) => { 
    await page.goto('http://testautomationpractice.blogspot.com/');

    await page.locator('.dropbtn').click({button: 'right'});

    await page.waitForTimeout(5000);


});

const { test, expect } = require('@playwright/test');

test('Single File',async ({page}) => { 
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#singleFileInput').setInputFiles('tests/uploadFiles/foto1.png');

    await page.waitForTimeout(5000);


});


test.only('Multiple Files',async ({page}) => { 
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#multipleFilesInput').setInputFiles(['tests/uploadFiles/foto1.png','tests/uploadFiles/foto2.png']);

    await page.waitForTimeout(5000);


})
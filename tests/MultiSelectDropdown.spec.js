const { test, expect } = require('@playwright/test');
const { Console } = require('console');

test('Handle dropdowns',async ({page}) => { 
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select miltiple options from multi select dropdown
    await page.selectOption('#colors',['Blue','Red','Yellow']);

    //Assertions

    //1) Check number of options in dropdown
    const options = await page.locator("//select[@id='colors']/option");
    await expect(options).toHaveCount(7);

    //2) Check number of options in dropdown using JS array
    const options1 = await page.$$('#colors option');
    await expect(options1).toHaveLength(7);

    //3) Check presence of value in the dropdown
    const content = await page.locator('#colors').textContent();
    await expect(content).toContain('Red');
    await expect(content).not.toContain('Black');

    await page.waitForTimeout(5000);

});

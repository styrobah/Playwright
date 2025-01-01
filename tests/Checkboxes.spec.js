const { test, expect } = require('@playwright/test');

test('Handle checkboxes',async ({page}) => { 
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    //single checkbox
    await page.locator('id=sunday').check();
    //await page.locator("//input[@id='monday' and @type='checkbox']").check();

    await expect(await page.locator('id=sunday')).toBeChecked();
    await expect(await page.locator('id=sunday').isChecked()).toBeTruthy();

    //multiple checkboxes 
    const checkboxes = [
        'id=tuesday',
        'id=monday',
        'id=saturday'
    ]

    for (let index = 0; index < checkboxes.length; index++)//select multiple checkboxes
    {
        await page.locator(checkboxes[index]).check();
    }

    for (let index = 0; index < checkboxes.length; index++)//unselect multiple checkboxes
    {
        if(await page.locator(checkboxes[index]).isChecked()){
            await page.locator(checkboxes[index]).uncheck();
        }
    }

    await page.waitForTimeout(5000);

});

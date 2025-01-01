const { test, expect } = require('@playwright/test');

test('Handle inputbox',async ({page}) => { 
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    const inputName = await page.locator('id=name');
    //Inputbox - firstname
    await expect(inputName).toBeVisible();
    await expect(inputName).toBeEmpty();
    await expect(inputName).toBeEditable();
    await expect(inputName).toBeEnabled();
    
    await inputName.fill('John');
    await page.waitForTimeout(5000);
});

const { test, expect } = require('@playwright/test');

test('Handle radio button',async ({page}) => { 
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    const radioButtonMale = await page.locator('id=male');
    const radioButtonFemale = await page.locator('id=female');
    await radioButtonMale.check();
    await expect(radioButtonMale).toBeChecked();
    await expect(radioButtonMale.isChecked()).toBeTruthy();
    
    await expect(await radioButtonFemale).not.toBeChecked();
    await expect(await radioButtonFemale.isChecked()).toBeFalsy();
    
    await page.waitForTimeout(5000);
});

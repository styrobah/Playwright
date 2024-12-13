import {test, expect} from '@playwright/test';

test('Locators', async ({ page })=> {
    await page.goto('https://www.demoblaze.com/index.html');

    //click on login button - property 
    await page.locator('id=login2').click();

    //provide username - CSS
    await page.locator('#loginusername').fill('pavanol');

    //provide password - CSS
    await page.locator("input[id='loginpassword']").fill('test@123');

    //click on login button - XPATH
    await page.click("//button[normalize-space()='Log in']");

    await expect(page.locator('#logout2')).toBeVisible();

    await page.close();
});



const { test, expect } = require('@playwright/test');

test('Keyboard actions',async ({page}) => { 
    await page.goto('http://gotranscript.com/text-compare');
    
    await page.locator('[name="text1"]').fill("Welcome to automation");

    //1st step: CTRL + A
    
    await page.keyboard.press('Meta+A');

    //2nd step: CTRL + C
    await page.keyboard.press('Meta+C');

    //3rd: TAB
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    //4th step: CTRL + V
    await page.keyboard.press('Meta+V');

    await page.waitForTimeout(5000);


});

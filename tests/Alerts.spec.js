const { test, expect } = require('@playwright/test');

test('Alert with OK',async ({page}) => { 
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert handling because dialogs are auto-dismissed by Playwright, so we need to "activate" them and then do the thing we want
    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.locator('#alertBtn').click();

    await page.waitForTimeout(5000);

});


test('Confirmation Dialog-Alert with OK and Cancel',async ({page}) => { 
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Dialog window handler
    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); //close by using OK button
        await dialog.dismiss() //close by using Cancel button
    })

    await page.locator('#confirmBtn').click();

    await page.waitForTimeout(5000);
    
});

test('Prompt dialog',async ({page}) => { 
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Dialog window handler
    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept(); //close by using OK button
        await dialog.dismiss() //close by using Cancel button
    })

    await page.locator('#promptBtn').click();

    await page.waitForTimeout(5000);
    
});

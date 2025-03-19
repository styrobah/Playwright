const { test, expect } = require('@playwright/test');

test('Drag and Drop',async ({page}) => { 
    await page.goto('http://testautomationpractice.blogspot.com/');

    const source = page.locator('#draggable');
    const target = page.locator('#droppable');
    await source.dragTo(target);


    await page.waitForTimeout(5000);


});

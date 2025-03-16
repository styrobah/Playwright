const { test, expect } = require('@playwright/test');
const { Console } = require('console');

test('Inner Frames',async ({page}) => { 
    
    await page.goto('https://ui.vision/demo/webtest/frames/');


    const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    //frame3.locator("[name='mytext3']").fill('OLA');

    //nested frame
    const childFrames = await frame3.childFrames();
    await childFrames[0].locator("//div[@id='i6']//div[@class='AB7Lab Id5V1']").check();

    await page.waitForTimeout(5000);
});
const { test, expect } = require('@playwright/test');
const { Console } = require('console');

test('Frames',async ({page}) => { 
    
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames available
    const allFrames = await page.frames();
    console.log("Total number of frames: " + allFrames.length);

    //approach 1: using name or url
    //const frame1 = await page.frame('name'); // if the name is present you can use the name or if the url is available use the url. See below
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'}); 
    await frame1.fill("[name='mytext1']",'hello');

    //approach 2- using frame locator
    await page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']").fill('OLA')



    await page.waitForTimeout(5000);
});
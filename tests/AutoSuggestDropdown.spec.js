const { test, expect } = require('@playwright/test');
const { Console } = require('console');

test('Auto suggest dropdown',async ({page}) => { 
    
    await page.goto('https://www.redbus.in/',{waitUntil: 'load'});

    await page.locator('#src').fill('Delhi');
    await page.waitForSelector('.placeHolderMainText');

    const fromCityOptions = await page.$$('.placeHolderMainText');

    for (let option of fromCityOptions) {
        const value = await option.textContent();
        console.log(value);
        if(value.includes('Anand Vihar')){
           await option.click();
           break;
        }

    }
    

    await page.waitForTimeout(5000);


});

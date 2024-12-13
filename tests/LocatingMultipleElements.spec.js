import {test, expect} from '@playwright/test';

test('Locators web elements', async ({ page })=> {
    await page.goto('https://www.demoblaze.com/index.html');

    //await page.waitForSelector("//div[@id='tbodyid']//h4/a");
    //const links = await page.$$("//div[@id='tbodyid']//h4/a");

    await page.waitForSelector('.hrefch');
    const links = await page.$$('.hrefch');

    for (const link of links) {
        const linkTest = await link.textContent();
        console.log(linkTest);
        if(linkTest == 'Samsung galaxy s6'){
            await link.click();
            break;
        }
    }
});
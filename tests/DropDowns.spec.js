const { test, expect } = require('@playwright/test');

test('Handle dropdowns',async ({page}) => { 
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple ways to select option from the dropdown
    const country = await page.locator('#country');
    //await country.selectOption({label: 'India'}); // by label 
    //await country.selectOption('India'); // visible text
    //await country.selectOption({value: 'uk'}); // by using value
    //await country.selectOption({index: 1}); //by using index
    //await page.selectOption("#country",'India'); //by text

    //Assertions
    //1) check number of options in dropdown - Approach 1
    //const options = await page.locator("//select[@id='country']//option");
    //await expect(options).toHaveCount(10);

    //2) Check number of options in dropdown
    //const options = await page.$$('#country option')  //in this case, options is an array
    //await expect(options.length).toBe(10);

    //3) check presence of value in the dropdown - Approach 1/2
    const valueOfDropDowns = await page.locator("//select[@id='country']").textContent();
    await expect(valueOfDropDowns).toContain('United States');
    //or
    await expect(valueOfDropDowns.includes('India')).toBeTruthy();

    //4) check presence of value in the dropdown - Approach 3 - using looping
    const options = await page.locator('#country option');
    let status = false;
    for (option in options){
        let value = await option.textContent();
        if(value.includes('France')){
            status = true;
            break;
        }
    }
    await expect(status).toBeTruthy();

    await page.waitForTimeout(5000);

});

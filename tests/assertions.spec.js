const { test, expect } = require('@playwright/test');

test('AssertionsTest',async ({page}) => { 
    
    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    await expect(await page.getByAltText('nopCommerce demo store')).toBeVisible();

    await expect(await page.getByPlaceholder('Search Store')).toBeEnabled();

    const maleRadioButton = await page.locator('#gender-male');
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    await expect(await page.locator('#register-button')).toHaveAttribute('type','submit');

    await expect(await page.locator('.page-title h1')).toHaveText('Register');

    await expect(await page.locator('.page-title h1')).toContainText('Register'); //full text

    await expect(await page.locator('.page-title h1')).toContainText('Register'); // partial text

    const emailElement = await page.locator('#Email');
    emailElement.fill('Diogoantonio45@hotmail.com');
    await expect(emailElement).toHaveValue('Diogoantonio45@hotmail.com');
     

    //ESTE AQUI É IMPORTANTE PARA O CASO DE FAZER VALIDAÇÕES A UMA DROPDOWN 
    const options = await page.locator('select[name="DateOfBirthMonth"] option');
    await expect(options).toHaveCount(13);
});
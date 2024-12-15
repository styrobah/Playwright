const { test, expect } = require('@playwright/test');

test('Login', async ({ page })=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button',{ name : 'Login'}).click();

    const dashboardWord = await page.getByRole('Heading', {name : 'Dashboard' });

    await expect(dashboardWord).toBeVisible();

    await page.close();

});


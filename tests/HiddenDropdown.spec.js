const { test, expect } = require('@playwright/test');

test('Hidden options dropdown',async ({page}) => { 
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button',{ name : 'Login'}).click();

    const dashboardWord = await page.getByRole('Heading', {name : 'Dashboard' });

    await expect(dashboardWord).toBeVisible();

    await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click();

    //click on the dropdown
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click();

    //waiting for options to appear
    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span");

    for (let option of options) {
        const jobTitle = await option.textContent();
        console.log(jobTitle);
        if(jobTitle == 'QA Engineer'){
            await option.click();
            break;
        }
    }
});

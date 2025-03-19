const { test, expect } = require('@playwright/test');

test('Date Picker',async ({page}) => { 
    
    await page.goto('http://testautomationpractice.blogspot.com/');

    const datePicker = await page.locator('#datepicker');
    //here you are putting the date directly
    //datePicker.fill('03/15/2024');

    const year = "2024";
    const month = "March";
    const day = "30";

    datePicker.click();
    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        if(currentYear == year && currentMonth == month){
            break;
        }

        // Convert months to numbers for comparison
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const currentMonthIndex = monthNames.indexOf(currentMonth);
        const targetMonthIndex = monthNames.indexOf(month);

        if (currentYear > year || (currentYear === year && currentMonthIndex > targetMonthIndex)) {
            await page.locator('[title="Prev"]').click(); // Move backward
        } else {
            await page.locator('[title="Next"]').click(); // Move forward
        }

        //if you dont want to use a loop
        /*
        const days = await page.$$('.ui-state-default');
        for(const da of days){
            if(await da.textContent() == day){
                await da.click();

            }
        };*/

        //you can click directly
        await page.locator(`[data-date="${day}"]`).click();
    }
    await page.waitForTimeout(5000);


});

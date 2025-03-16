const { test, expect } = require('@playwright/test');

test('Handling table',async ({page}) => { 
    
    await page.goto('http://testautomationpractice.blogspot.com/');

    const table = await page.locator('//table[@id="productTable"]');
    
    //1) total number of rows and columns
    const columns = await table.locator('thead tr th');


    const rows = await table.locator('tbody tr');

    //2) select check box for product 4
    /*
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
        await matchedRow.locator('input').check();
    
    */

    //3) select multiple checkboxs
    /*
    await selectProduct(rows,page,'Smartphone');
    await selectProduct(rows,page,'Laptop');
    await selectProduct(rows,page,'Wireless Earbuds');
    */

    //4) print all product details using loop
    /*
    for (let index = 0; index < await rows.count(); index++) {
        const row = rows.nth(index);
        const tds = row.locator('td');

        for (let j = 0; j < await tds.count()-1; j++) {
            console.log(await tds.nth(j).textContent());
        }
        
    }*/

    //5) read data from all the pages in the table 
    const pages = await page.locator('pagination li a');
    await console.log(await pages.count());

    for (let index = 0; index < pages.count(); index++) {
       if(index > 0){
            await pages.nth(index).click();
        }
        for (let index = 0; index < await rows.count(); index++) {
            const row = rows.nth(index);
            const tds = row.locator('td');

            for (let j = 0; j < await tds.count()-1; j++) {
                console.log(await tds.nth(j).textContent());
            }
            
        }
        await page.waitForTimeout(5000);
        
    }
    await page.waitForTimeout(5000);
});

/*
function selectProduct(rows, page, nameOfProduct) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: nameOfProduct
    });

    matchedRow.locator('input').check();
}*/
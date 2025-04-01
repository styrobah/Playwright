const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';


//we create classes for each page object, in this case 3: Login, Home, Cart
test('Test1',async ({page}) => { 
    //Login
    //o login é um object no proximo passo
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123');
    await page.waitForTimeout(5000);
    //Home
    const home = new HomePage(page);
    await home.addProductToCart('Samsung galaxy s6');
    await page.waitForTimeout(3000);
    await home.goToCart();
    await page.waitForTimeout(3000);
    //Cart
    const cart = new CartPage(page);
    const status = await cart.checkProductsInCart('Samsung galaxy s6');
    await expect(status).toBe(true);
});

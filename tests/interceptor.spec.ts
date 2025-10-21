import { test, expect } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';

test('purchase an item 2', async ({ page }) => {
    
    await page.on("request", (req) => {
        console.log(req.url())
    });
    
    await page.route(
        //usando expresión regular, bloqueando todo tipo de formatos de imágenes 
        "**/*.{png.jpg.jpeg.svg}",
        (route) => route.abort()
    );
    
    await page.goto("https://saucedemo.com");
    const login = new LoginPage(page);
    await login.loginWithCredentials("standard_user", "secret_sauce");
    await login.checkSuccessfulLogin();
    
    
    const itemsContainer = await page
    .locator("#inventory_container .inventory_item")
    .all();

   await page.screenshot({path:'login.png', fullPage:true}) 
})
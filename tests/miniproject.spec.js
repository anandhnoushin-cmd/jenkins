import { test, expect } from "@playwright/test";

test("miniproject", async ({ page }) => {
    Login:
    await page.goto("https://www.saucedemo.com/");
    await expect(page.locator('//div[text()="Swag Labs"]')).toHaveText("Swag Labs");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await page.locator('//input[@placeholder="Username"]').fill("standard_user");
    await page.locator('//input[@placeholder="Password"]').fill("secret_sauce");
    await page.locator('//input[@id="login-button"]').click();

 products:
    await expect(page.locator('//span[text()="Products"]')).toHaveText("Products");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.locator('//select[@class="product_sort_container"]').selectOption("lohi");
    await page.locator('//button[@id="add-to-cart-sauce-labs-onesie"]').click();

     cart:
    await page.locator('//a[@data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    await expect(page.locator('//span[text()="Your Cart"]')).toBeVisible();
    await expect(page.locator('//div[text()="Sauce Labs Onesie"]')).toBeVisible();
    await expect(page.locator('//div[text()="7.99"]')).toBeVisible();
    await page.locator('//button[@id="checkout"]').click();

     Checkout:
    await page.locator('//input[@id="first-name"]').fill("rupa");
    await page.locator('//input[@id="last-name"]').fill("nithi");
    await page.locator('//input[@placeholder="Zip/Postal Code"]').fill("641113");
    await page.locator('//input[@id="continue"]').click();
    await expect(page).toHaveTitle("Swag Labs");

    Orderconfirmation:
    await expect(page.locator('//span[text()="Checkout: Overview"]')).toBeVisible();
    await expect(page.locator('//div[contains(text(),"Payment Information)"]')).toBeVisible();
    await expect(page.locator('//div[text()="Free Pony Express Delivery!"]')).toBeVisible();
    await expect(page.locator('//div[text()="8.63"]')).toBeVisible();
    await page.locator('//button[@id="finish"]').click();
     
    assertion:
    await expect(page.locator('//span[text()="Checkout: Complete!"]')).toBeVisible();
    await expect(page.locator('//img[@data-test="pony-express"]')).toBeVisible();
    await expect(page.locator('//h2[text()="Thank you for your order!"]')).toBeVisible();
    await page.locator('//button[@id="back-to-products"]').click();
    await expect(page.locator('//span[text()="Products"]')).toBeVisible();

    Logout:
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.locator('//button[@id="react-burger-menu-btn"]').click();
    await page.locator('//a[@id="logout_sidebar_link"]').click();
    await expect(page.locator('//input[@placeholder="Username"]')).toBeVisible();
    
   // await page.pause();
});
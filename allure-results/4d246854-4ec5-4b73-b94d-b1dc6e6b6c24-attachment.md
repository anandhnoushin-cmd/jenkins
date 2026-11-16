# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: miniproject.spec.js >> miniproject
- Location: tests\miniproject.spec.js:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("miniproject", async ({ page }) => {
  4  |     Login:
> 5  |     await page.goto("https://www.saucedemo.com/");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  6  |     await expect(page.locator('//div[text()="Swag Labs"]')).toHaveText("Swag Labs");
  7  |     await expect(page).toHaveURL("https://www.saucedemo.com/");
  8  |     await page.locator('//input[@placeholder="Username"]').fill("standard_user");
  9  |     await page.locator('//input[@placeholder="Password"]').fill("secret_sauce");
  10 |     await page.locator('//input[@id="login-button"]').click();
  11 | 
  12 |  products:
  13 |     await expect(page.locator('//span[text()="Products"]')).toHaveText("Products");
  14 |     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  15 |     await page.locator('//select[@class="product_sort_container"]').selectOption("lohi");
  16 |     await page.locator('//button[@id="add-to-cart-sauce-labs-onesie"]').click();
  17 | 
  18 |      cart:
  19 |     await page.locator('//a[@data-test="shopping-cart-link"]').click();
  20 |     await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  21 |     await expect(page.locator('//span[text()="Your Cart"]')).toBeVisible();
  22 |     await expect(page.locator('//div[text()="Sauce Labs Onesie"]')).toBeVisible();
  23 |     await expect(page.locator('//div[text()="7.99"]')).toBeVisible();
  24 |     await page.locator('//button[@id="checkout"]').click();
  25 | 
  26 |      Checkout:
  27 |     await page.locator('//input[@id="first-name"]').fill("rupa");
  28 |     await page.locator('//input[@id="last-name"]').fill("nithi");
  29 |     await page.locator('//input[@placeholder="Zip/Postal Code"]').fill("641113");
  30 |     await page.locator('//input[@id="continue"]').click();
  31 |     await expect(page).toHaveTitle("Swag Labs");
  32 | 
  33 |     Orderconfirmation:
  34 |     await expect(page.locator('//span[text()="Checkout: Overview"]')).toBeVisible();
  35 |     await expect(page.locator('//div[contains(text(),"Payment Information)"]')).toBeVisible();
  36 |     await expect(page.locator('//div[text()="Free Pony Express Delivery!"]')).toBeVisible();
  37 |     await expect(page.locator('//div[text()="8.63"]')).toBeVisible();
  38 |     await page.locator('//button[@id="finish"]').click();
  39 |      
  40 |     assertion:
  41 |     await expect(page.locator('//span[text()="Checkout: Complete!"]')).toBeVisible();
  42 |     await expect(page.locator('//img[@data-test="pony-express"]')).toBeVisible();
  43 |     await expect(page.locator('//h2[text()="Thank you for your order!"]')).toBeVisible();
  44 |     await page.locator('//button[@id="back-to-products"]').click();
  45 |     await expect(page.locator('//span[text()="Products"]')).toBeVisible();
  46 | 
  47 |     Logout:
  48 |     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  49 |     await page.locator('//button[@id="react-burger-menu-btn"]').click();
  50 |     await page.locator('//a[@id="logout_sidebar_link"]').click();
  51 |     await expect(page.locator('//input[@placeholder="Username"]')).toBeVisible();
  52 |     
  53 |     await page.pause();
  54 | });
```
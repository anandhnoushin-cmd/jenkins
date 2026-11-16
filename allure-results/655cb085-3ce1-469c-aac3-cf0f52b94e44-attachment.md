# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: taskone.spec.js >> login using xpath
- Location: tests\taskone.spec.js:30:10

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect} from'@playwright/test'
  2  | test("taskone",async({page})=>{
  3  |     await page.goto("https://opensource-demo.orangehrmlive.com/")
  4  |     await page.locator('[name="username"]').fill("admin")
  5  |     await page.locator('[type="password"]').fill("admin123")
  6  |     await page.locator('[type="submit"]').click()
  7  |     await page.waitForTimeout(5000)
  8  |     await page.pause()
  9  |     
  10 |     
  11 |     
  12 | })
  13 | 
  14 | 
  15 | 
  16 | test("login using built-in locators",async({page})=>{
  17 |     await page.goto("https://opensource-demo.orangehrmlive.com/")
  18 |     await page.getByPlaceholder("Username").fill("admin");
  19 |     await page.getByPlaceholder("Password").fill("admin123");
  20 |     await page.getByRole("button",{name:"login"}).click();
  21 |     
  22 |     await page.pause();
  23 | });
  24 |     
  25 |     
  26 | 
  27 | 
  28 | 
  29 | 
  30 |     test.only("login using xpath",async({page})=>{
> 31 |     await page.goto("https://opensource-demo.orangehrmlive.com/");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  32 |     await page.locator('//input[@name="username"]').fill("admin");
  33 |     await page.locator('//input[@type="password"]').fill("admin123");
  34 |     await page.locator('//button[@type="submit"]').click();
  35 |     await page.pause();   
  36 |     });
  37 | 
  38 | 
  39 |     //div[@id="header-inner"]/descendant::span[text()="For Selenium, Cypress & Playwright"]
  40 |     //input[@id="name"]/parent::div[@class="form-group"]
  41 |     
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tabs.spec.js >> handling tabs
- Location: tests\tabs.spec.js:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect, chromium}from'@playwright/test'
  2  | 
  3  | test("handling tabs",async()=>{
  4  |     const browser=await chromium.launch();
  5  |     const context=await browser.newContext()
  6  |     const pageOne=await context.newPage();
  7  | 
> 8  |     await pageOne.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     |                   ^ Error: page.goto: Target page, context or browser has been closed
  9  |     console.log(await pageOne.title());
  10 |     await pageOne.locator('//input[@id="name"]').fill("javascript")
  11 |     await pageOne.waitForTimeout(5000)
  12 | 
  13 |     const pageTwo=await context.newPage();
  14 | 
  15 |     await pageTwo.goto("https://www.facebook.com/")
  16 |     console.log(await pageTwo.title());
  17 |     await pageTwo.locator('//input[@name="email"]').fill("rupaselvan95@gmail.com")
  18 |     await pageTwo.waitForTimeout(5000)
  19 |     
  20 | })
  21 | 
  22 | 
  23 | 
  24 | test("tabs handling ",async({browser})=>{
  25 |     const context=await browser.newContext();
  26 |     const page=await context.newPage();
  27 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  28 |     console.log(await page.title());
  29 |     await page.locator('//input[@name="username"]').fill("playwright");
  30 |     const [newtab]=await Promise.all([
  31 |         context.waitForEvent('page'),
  32 |         page.locator('//a[text()="OrangeHRM, Inc"]').click()
  33 | 
  34 |     ])
  35 |     await newtab.waitForLoadState()
  36 |     await newtab.locator('//button[text()="Book a Free Demo"]').click()
  37 |     await newtab.pause()
  38 |     
  39 | })
  40 | 
  41 | 
  42 | //5.10.2026 
  43 | //page navigation
  44 | test("page navigation",async({page})=>{
  45 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  46 |     await page.getByPlaceholder("Username").fill("Admin");
  47 |     await page.getByPlaceholder("Password").fill("admin123");
  48 |     await page.getByRole("button",{name:" Login "}).click();
  49 | 
  50 |     await page.pause();
  51 |     await page.goBack();
  52 |     await page.pause();
  53 |     await page.goForward();
  54 |     await page.pause();
  55 |     await page.reload();
  56 |     await page.pause();
  57 | });
  58 | 
  59 | 
  60 | 
  61 | 
  62 | test("page flipkart",async({page})=>{
  63 |     await page.goto("https://www.flipkart.com/mobile-phones-store?pageUID=1791219342622");
  64 |     await page.goto("https://www.flipkart.com/search?q=apple+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_2_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=apple+mobile%7CMobiles&requestId=e159c854-cc9a-4a8c-8407-ddcbccc18b6e");
  65 |     await page.pause();
  66 |     await page.goBack();
  67 |     await page.pause();
  68 |     await page.goForward();
  69 |     await page.pause();
  70 |     await page.reload();
  71 |     await page.pause();
  72 | });
```
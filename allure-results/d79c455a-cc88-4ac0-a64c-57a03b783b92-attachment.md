# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: iframestask.spec.js >> iframes
- Location: tests\iframestask.spec.js:11:10

# Error details

```
Error: page.goto: net::ERR_CONNECTION_CLOSED at https://letcode.in/frame
Call log:
  - navigating to "https://letcode.in/frame", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect}from'@playwright/test'
  2  | 
  3  | //test("handling iframes",async({page})=>{
  4  |     //await page.goto("https://letcode.in/frame");
  5  |     //const frame=await page.frameLocator('//iframe[@id="firstFr"]')
  6  |     //await frame.locator('//input[@name="fname"]').fill("rupa");
  7  |     //await frame.locator('//input[@name="lname"]').fill("anandh");
  8  |     
  9  | //})
  10 |     
  11 |     test.only("iframes",async({page})=>{
> 12 |     await page.goto("https://letcode.in/frame");
     |                ^ Error: page.goto: net::ERR_CONNECTION_CLOSED at https://letcode.in/frame
  13 |     const frame=await page.frameLocator('//iframe[@id="firstFr"]')
  14 | 
  15 |     await frame.locator('//input[@name="fname"]').fill("rupa");
  16 |     await frame.locator('//input[@name="lname"]').fill("anandh");
  17 |     
  18 |     const nestedframe=frame.frameLocator('iframe[src="/innerframe"]')
  19 |     await nestedframe.locator('//input[@name="email"]').fill("example1234@gmail.com");
  20 |     
  21 |     await page.pause()
  22 | })
  23 | 
  24 | 
  25 |     
  26 | 
  27 | 
```
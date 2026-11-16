# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frames&iframes.spec.js >> iframelocator
- Location: tests\frames&iframes.spec.js:38:6

# Error details

```
Error: page.goto: net::ERR_CONNECTION_CLOSED at https://demo.automationtesting.in/Frames.html
Call log:
  - navigating to "https://demo.automationtesting.in/Frames.html", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect}from'@playwright/test'
  2  | 
  3  | test("handling iframes",async({page})=>{
  4  |     await page.goto("https://practice-automation.com/iframes/");
  5  |     const automation=await page.frames()
  6  |     console.log("frame count :",automation.length);
  7  |     for(let i of automation){
  8  |         console.log("frame url:",i.url());
  9  |         
  10 |     }
  11 |     
  12 | })
  13 | 
  14 | test("iframes",async({page})=>{
  15 |     await page.goto("https://practice-automation.com/iframes/");
  16 | const playwright=await page.frame({name:"top-iframe"})
  17 | await playwright.locator('//a[text()=docs"]').click();
  18 | const selenium=await page.frame({url:"https://www.selenium.dev/"})
  19 | await selenium.locator('//a[@class="nav-link"]/child::span[text()="Downloads"]').click
  20 | await page.pause()
  21 | 
  22 | })
  23 | 
  24 | 
  25 | test("handling iframes.locator",async({page})=>{
  26 |     await page.goto("https://practice-automation.com/iframes/");
  27 |     await expect(page.locator('//h1[text()="Iframes"]')).toHaveText("Iframes");
  28 |     const playwright=await page.frameLocator('//iframe[@id="iframe-1"]')
  29 |     await playwright.locator('//a[text()="docs"]').click();
  30 |     const selenium=await page.frameLocator('//iframe[id="iframe-2"]')
  31 |     await selenium.locator('//a[@class="nav-link"]/child::span[text()="Downloads"]').click()
  32 |     
  33 | })
  34 | 
  35 | 
  36 | 
  37 | 
  38 | test.only("iframelocator",async({page})=>{
> 39 |     await page.goto("https://demo.automationtesting.in/Frames.html")
     |                ^ Error: page.goto: net::ERR_CONNECTION_CLOSED at https://demo.automationtesting.in/Frames.html
  40 |     await page.locator('//a[text()="Iframe with in an Iframe"]').click
  41 |     //const iframe=await page.frame({url:"https://demo.automationtesting.in/Frames.html"})
  42 |     //const nestedframe=await iframe.childFrames()[0]
  43 |     //await nestedframe.locator('//input[@type="text"]').fill("playwright")
  44 |     
  45 |     
  46 |     
  47 |     const iframe=await page.frameLocator('//div[@id="Multiple"]/iframe')
  48 |     const nestedframe=await iframe.frameLocator('//h5[text()="Nested iFrames"]/following-sibling::iframe')
  49 |     await nestedframe.locator('//input[@type="text"]').fill("playwright")
  50 |     
  51 |     
  52 |     await page.pause()
  53 | })
  54 | 
  55 | 
```
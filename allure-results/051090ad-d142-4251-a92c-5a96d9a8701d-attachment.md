# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkboxtask.spec.js >> radio button test
- Location: tests\checkboxtask.spec.js:11:6

# Error details

```
Error: page.goto: net::ERR_CONNECTION_CLOSED at https://letcode.in/radio
Call log:
  - navigating to "https://letcode.in/radio", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect} from'@playwright/test'
  2  | test("radio andcheckbox test",async({page})=>{
  3  |     await page.goto('https://letcode.in/radio');
  4  |     await page.locator('//input[@id="yes"]').check()
  5  |     await expect (page.locator('//input[@id="yes"]')).toBeChecked()
  6  | await expect(page.locator('//input[@id="no"]')).not.toBeChecked()
  7  | await page.pause()
  8  | })
  9  | 
  10 | 
  11 | test.only("radio button test",async({page})=>{
> 12 |     await page.goto('https://letcode.in/radio');
     |                ^ Error: page.goto: net::ERR_CONNECTION_CLOSED at https://letcode.in/radio
  13 |     await page.locator('//input[@id="one"]').check()
  14 |     await expect (page.locator('//input[@id="one"]')).toBeChecked()
  15 |     await page.locator('//input[@id="two"]').check()
  16 | await expect(page.locator('//input[@id="two"]')).toBeChecked()
  17 | 
  18 | 
  19 | await (page.locator('//input[@id="nobug"]')).check()
  20 | await (page.locator('//input[@id="bug"]')).check()
  21 | await expect (page.locator('//input[@id="nobug"]')).toBeChecked()
  22 | await expect(page.locator('//input[@id="bug"]')).toBeChecked()
  23 | 
  24 | await(page.locator('//input[@id="foo"]')).check()
  25 | await expect(page.locator('//input[@id="foo"]')).toBeChecked()
  26 | 
  27 | await expect(page.locator('//input[@id="maybe"]')).toBeDisabled()
  28 | 
  29 | await page.pause()
  30 | 
  31 | })
  32 | 
  33 | 
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fileupload.spec.js >> file download
- Location: tests\fileupload.spec.js:24:6

# Error details

```
Error: page.goto: net::ERR_CONNECTION_CLOSED at https://demo.automationtesting.in/FileDownload.html
Call log:
  - navigating to "https://demo.automationtesting.in/FileDownload.html", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect, chromium}from'@playwright/test'
  2  | 
  3  | test("file upload",async({page})=>{
  4  |     await page.goto("https://testautomationpractice.blogspot.com/")
  5  |     await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/Acer Swift Go/Downloads/WhatsApp_Image_2026-05-27_at_1.32.24_PM-removebg-preview (1).png")
  6  |     await page.locator('//button[text()="Upload Single File"]').click()
  7  |     await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: WhatsApp_Image_2026-05-27_at_1.32.24_PM-removebg-preview (1).png, Size: 194558 bytes, Type: image/png")
  8  |     await page.pause()
  9  | })
  10 | 
  11 | 
  12 | test("multiple file upload",async({page})=>{
  13 |     await page.goto("https://testautomationpractice.blogspot.com/")
  14 |     await page.locator('//input[@id="multipleFilesInput"]').setInputFiles("C:/Users/Acer Swift Go/Downloads/Abhibus_E_Ticket-2999.pdf","C:/Users/Acer Swift Go/Downloads/Abhibus_AZ5871092178.pdf")     
  15 | await page.locator('//button[text()="Upload Multiple Files"]').click()
  16 |     await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText("Multiple files selected")
  17 |     await page.pause()
  18 | 
  19 |      await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([]) 
  20 |      await page.pause()    
  21 | })
  22 | 
  23 | 
  24 | test.only("file download",async({page})=>{
> 25 |     await page.goto("https://demo.automationtesting.in/FileDownload.html")
     |                ^ Error: page.goto: net::ERR_CONNECTION_CLOSED at https://demo.automationtesting.in/FileDownload.html
  26 | const[downloadedfile]=await Promise.all([
  27 |     page.waitForEvent('download'),
  28 |     page.locator('//a[text()="Download" and@type="button"]').click()
  29 | ])
  30 | const file="C:/Users/Acer Swift Go/Downloads/files download"
  31 | await downloadedfile.saveAs('files download')
  32 | await page.pause()
  33 | })
  34 | 
  35 | 
  36 | 
  37 | 
```
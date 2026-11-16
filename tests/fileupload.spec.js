import {test,expect, chromium}from'@playwright/test'

test("file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/Acer Swift Go/Downloads/WhatsApp_Image_2026-05-27_at_1.32.24_PM-removebg-preview (1).png")
    await page.locator('//button[text()="Upload Single File"]').click()
    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: WhatsApp_Image_2026-05-27_at_1.32.24_PM-removebg-preview (1).png, Size: 194558 bytes, Type: image/png")
    //await page.pause()
})


test("multiple file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles("C:/Users/Acer Swift Go/Downloads/Abhibus_E_Ticket-2999.pdf","C:/Users/Acer Swift Go/Downloads/Abhibus_AZ5871092178.pdf")     
await page.locator('//button[text()="Upload Multiple Files"]').click()
    await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText("Multiple files selected")
    //await page.pause()

     await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([]) 
  //   await page.pause()    
})


test("file download",async({page})=>{
    await page.goto("https://demo.automationtesting.in/FileDownload.html")
const[downloadedfile]=await Promise.all([
    page.waitForEvent('download'),
    page.locator('//a[text()="Download" and@type="button"]').click()
])
const file="C:/Users/Acer Swift Go/Downloads/files download"
await downloadedfile.saveAs('files download')
//await page.pause()
})




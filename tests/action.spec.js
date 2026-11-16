import {test,expect, chromium}from'@playwright/test'

test("keyborad action",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//input[@id="name"]').fill("playwright");

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
   // await page.pause();
})


test("hover action",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('//button[text()="Point Me"]').hover()

//await page.pause()
})


test("myntra tshirt",async({page})=>{

    await page.goto("https://www.myntra.com/");
    await page.locator(' ')

})
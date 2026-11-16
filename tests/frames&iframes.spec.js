import {test,expect}from'@playwright/test'

test("handling iframes",async({page})=>{
    await page.goto("https://practice-automation.com/iframes/");
    const automation=await page.frames()
    console.log("frame count :",automation.length);
    for(let i of automation){
        console.log("frame url:",i.url());
        
    }
    
})

test("iframes",async({page})=>{
    await page.goto("https://practice-automation.com/iframes/");
const playwright=await page.frame({name:"top-iframe"})
await playwright.locator('//a[text()=docs"]').click();
const selenium=await page.frame({url:"https://www.selenium.dev/"})
await selenium.locator('//a[@class="nav-link"]/child::span[text()="Downloads"]').click
//await page.pause()

})


test("handling iframes.locator",async({page})=>{
    await page.goto("https://practice-automation.com/iframes/");
    await expect(page.locator('//h1[text()="Iframes"]')).toHaveText("Iframes");
    const playwright=await page.frameLocator('//iframe[@id="iframe-1"]')
    await playwright.locator('//a[text()="docs"]').click();
    const selenium=await page.frameLocator('//iframe[id="iframe-2"]')
    await selenium.locator('//a[@class="nav-link"]/child::span[text()="Downloads"]').click()
    
})




test("iframelocator",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    await page.locator('//a[text()="Iframe with in an Iframe"]').click
    //const iframe=await page.frame({url:"https://demo.automationtesting.in/Frames.html"})
    //const nestedframe=await iframe.childFrames()[0]
    //await nestedframe.locator('//input[@type="text"]').fill("playwright")
    
    
    
    const iframe=await page.frameLocator('//div[@id="Multiple"]/iframe')
    const nestedframe=await iframe.frameLocator('//h5[text()="Nested iFrames"]/following-sibling::iframe')
    await nestedframe.locator('//input[@type="text"]').fill("playwright")
    
    
    //await page.pause()
})


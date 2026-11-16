import{test,expect}from'@playwright/test'

//test("handling iframes",async({page})=>{
    //await page.goto("https://letcode.in/frame");
    //const frame=await page.frameLocator('//iframe[@id="firstFr"]')
    //await frame.locator('//input[@name="fname"]').fill("rupa");
    //await frame.locator('//input[@name="lname"]').fill("anandh");
    
//})
    
    test("iframes",async({page})=>{
    await page.goto("https://letcode.in/frame");
    const frame=await page.frameLocator('//iframe[@id="firstFr"]')

    await frame.locator('//input[@name="fname"]').fill("rupa");
    await frame.locator('//input[@name="lname"]').fill("anandh");
    
    const nestedframe=frame.frameLocator('iframe[src="/innerframe"]')
    await nestedframe.locator('//input[@name="email"]').fill("example1234@gmail.com");
    
    //await page.pause()
})


    


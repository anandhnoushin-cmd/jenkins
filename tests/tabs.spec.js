import {test,expect, chromium}from'@playwright/test'

test("handling tabs",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext()
    const pageOne=await context.newPage();

    await pageOne.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await pageOne.title());
    await pageOne.locator('//input[@id="name"]').fill("javascript")
    await pageOne.waitForTimeout(5000)

    const pageTwo=await context.newPage();

    await pageTwo.goto("https://www.facebook.com/")
    console.log(await pageTwo.title());
    await pageTwo.locator('//input[@name="email"]').fill("rupaselvan95@gmail.com")
    await pageTwo.waitForTimeout(5000)
    
})



test("tabs handling ",async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log(await page.title());
    await page.locator('//input[@name="username"]').fill("playwright");
    const [newtab]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('//a[text()="OrangeHRM, Inc"]').click()

    ])
    await newtab.waitForLoadState()
    await newtab.locator('//button[text()="Book a Free Demo"]').click()
   // await newtab.pause()
    
})


//5.10.2026 
//page navigation
test("page navigation",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button",{name:" Login "}).click();

    await page.pause();
    await page.goBack();
    await page.pause();
    await page.goForward();
    await page.pause();
    await page.reload();
    //await page.pause();
});




test("page flipkart",async({page})=>{
    await page.goto("https://www.flipkart.com/mobile-phones-store?pageUID=1791219342622");
    await page.goto("https://www.flipkart.com/search?q=apple+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_2_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=apple+mobile%7CMobiles&requestId=e159c854-cc9a-4a8c-8407-ddcbccc18b6e");
    await page.pause();
    await page.goBack();
    await page.pause();
    await page.goForward();
    await page.pause();
    await page.reload();
    //await page.pause();
});
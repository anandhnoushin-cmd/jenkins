import{test,expect}from'@playwright/test'

test.beforeAll("test started",async()=>{
    console.log("test started successfully");

})

test.beforeEach("page navigation",async()=>{
    await page.goto("https://www.saucedemo.com/")
})

test.afterEach("logout",async({page})=>{
    await page.locator('')
    await page.locator('//a[@id="logout_sidebar_link"]').click

})

test.afterAll("test ended",async()=>{
    console.log("test ended sucessfully");
})

test("login one",async({page})=>{
    await page.locator('')
})
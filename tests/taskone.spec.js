import{test,expect} from'@playwright/test'
test("taskone",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/")
    await page.locator('[name="username"]').fill("admin")
    await page.locator('[type="password"]').fill("admin123")
    await page.locator('[type="submit"]').click()
    await page.waitForTimeout(5000)
    //await page.pause()
    
    
    
})



test("login using built-in locators",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/")
    await page.getByPlaceholder("Username").fill("admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button",{name:"login"}).click();
    
    //await page.pause();
});
    
    




    test.only("login using xpath",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.locator('//input[@name="username"]').fill("admin");
    await page.locator('//input[@type="password"]').fill("admin123");
    await page.locator('//button[@type="submit"]').click();
    await page.pause();   
    });


    //div[@id="header-inner"]/descendant::span[text()="For Selenium, Cypress & Playwright"]
    //input[@id="name"]/parent::div[@class="form-group"]
    
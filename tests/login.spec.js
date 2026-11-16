import{test,expect} from'@playwright/test'
//test("login",async({page})=>{
  //  await page.goto("https://www.facebook.com/")
    //await page.locator("#_R_1h6kqsqppb6amH1_").fill("example123@gmail.com")
    //await page.locator('[type="password"]').fill("password123")
    //await page.locator('[aria-label="Log in"]').click()
    //await page.waitForTimeout(5000)
    //await page.pause()
//})


test("login using xpath",async({page})=>{
    await page.goto("https://www.facebook.com/");
    await page.locator('//input[@name="email"]').fill("example123@gmail.com");
    await page.locator('//input[@type="password"]').fill("password123");
    await page.locator('//div[@aria-label="Log in"]').click();
   // await page.pause()
});
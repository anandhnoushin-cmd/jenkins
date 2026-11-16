import{test,expect}from'@playwright/test'

test("asserion",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")


    await expect(page.locator('//img[@class="wikipedia-icon"]')).toBeVisible()
    await expect(page.locator('//p[@class="description"]/span')).toHaveText("For Selenium, Cypress & Playwright")
    await expect(page.locator('//p[@class="description"]/span')).toContainText("Playwright")
    

    const input='//input[@id="name"]'

    await expect(page.locator(input)).toBeEmpty()
    
    await page.locator(input).fill("rupa")
    await expect.soft(page.locator(input)).toHaveValue("rupa")
    
    await expect(page.locator(input)).not.toBeEmpty()

})


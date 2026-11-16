import{test,expect} from'@playwright/test'
test("checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="monday"]').check()
    await expect(page.locator('//input[@id="monday"]')).toBeChecked()

    

    await page.locator('//input[@id="monday"]').uncheck()

   // await page.pause()
})


test("multiple checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let locat='//input[@id="sunday"]'//input[@id="monday"]'//input[@id="wednesday"]'//input[@id="friday"]'
    for(let checkbox of locat){
        await page.locator(checkbox).check()
        await expect(page.locator(checkbox)).toBeChecked()

    }

    let day


})

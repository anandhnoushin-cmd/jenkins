import{test,expect} from'@playwright/test'
test("radio andcheckbox test",async({page})=>{
    await page.goto('https://letcode.in/radio');
    await page.locator('//input[@id="yes"]').check()
    await expect (page.locator('//input[@id="yes"]')).toBeChecked()
await expect(page.locator('//input[@id="no"]')).not.toBeChecked()
//await page.pause()
})


test("radio button test",async({page})=>{
    await page.goto('https://letcode.in/radio');
    await page.locator('//input[@id="one"]').check()
    await expect (page.locator('//input[@id="one"]')).toBeChecked()
    await page.locator('//input[@id="two"]').check()
await expect(page.locator('//input[@id="two"]')).toBeChecked()


await (page.locator('//input[@id="nobug"]')).check()
await (page.locator('//input[@id="bug"]')).check()
await expect (page.locator('//input[@id="nobug"]')).toBeChecked()
await expect(page.locator('//input[@id="bug"]')).toBeChecked()

await(page.locator('//input[@id="foo"]')).check()
await expect(page.locator('//input[@id="foo"]')).toBeChecked()

await expect(page.locator('//input[@id="maybe"]')).toBeDisabled()

//await page.pause()

})


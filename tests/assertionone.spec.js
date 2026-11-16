import{test,expect} from'@playwright/test'
test("postive login",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator('//input[@id="username"]').fill("student");
    await page.locator('//input[@type="password"]').fill("Password123");
  
    await page.locator('//button[@id="submit"]').click;

    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/");

});

test("multi select dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

const text=await page.locator('//select[@id="country"]').textContent()
console.log(text);

const ddcount=await page.locator('//select[@id="country"]/option').count()
console.log(ddcount);

await expect(page.locator('//select[@id="country"]/option')).toHaveCount(10)


await page.locator('//select[@id="colors"]').selectOption(["Blue","Green","Yellow"])
//await page.pause()
})
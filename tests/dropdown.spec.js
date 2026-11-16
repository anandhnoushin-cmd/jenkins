import{test,expect} from'@playwright/test'
test("single select dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
await page.locator('//select[@id="country"]').selectOption("United Kingdom");
await page.locator('//select[@id="country"]').selectOption({value:"india"});

await page.locator('//select[@id="country"]').selectOption({index:4});

})


test("dropdown",async({page})=>{
    await page.goto("https://letcode.in/dropdowns")
await page.locator('//select[@id="fruits"]').selectOption("Apple");
await page.locator('//select[@id="country"]').selectOption({value:"India"});
await page.locator('//select[@id="lang"]').selectOption({index:4});

const text=await page.locator('//select[@id="country"]').textContent()
console.log(text);

const ddcount=await page.locator('//select[@id="country"]/option').count()
console.log(ddcount);

await expect(page.locator('//select[@id="country"]/option')).toHaveCount(12)


await page.locator('//select[@id="colors"]').selectOption(["Blue","Green","Yellow"])
//await page.pause()
})


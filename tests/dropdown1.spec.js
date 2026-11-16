import{test,expect} from'@playwright/test'
test("dropdown",async({page})=>{
    await page.goto("https://letcode.in/dropdowns")
await page.locator('//select[@id="fruits"]').selectOption("Apple");
await page.locator('//select[@id="country"]').selectOption({value:"India"});
await page.locator('//select[@id="lang"]').selectOption({index:4});

const text=await page.locator('//select[@id="superheros"]').selectOption(["The Avengers","Batman","Captain America"])
console.log(text);

await expect(page.locator('//select[@id="superheros"]')).toBeVisible('//select[@id="superheros"]')
await expect(page.locator('//select[@id="fruits"]')).toBeVisible('//select[@id="fruits"]')

const alloptions=await page.locator('//select[@id="lang"]').allInnerTexts()
const country=await page.locator('//select[@id="country"]').selectOption("India")
console.log(alloptions);
console.log(country);

//await page.pause()
})
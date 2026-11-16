
import { test,expect}from'@playwright/test'
test("handling table",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const rows=page.locator('//table[@id="productTable"]/tbody/tr') //5
    const column=page.locator('//table[@id="productTable"]/thead/tr/th') //4

    console.log("ROWS COUNT :",await rows.count());
    console.log("COLUMN COUNT :",await column.count());
    
  
    //method 1
    //await page.locator('//table[@id="productTable"]/descendant::td[text()="Smartphone"]/following-sibling::td/child::input[@type="checkbox"]')

//method 2
//await rows.locator('//td[text()="Smartphone"]/following-sibling::td/child::input[@type="checkbox"]').check()

//await page.locator('//td[text()="Digital Camera"]//ul[@id="pagination"]//a[text()="3"]').check();

//await rows.locator('//td[text()="VR Headset"]/following-sibling::td//input').check();


  await rows.locator('#productTable tr').filter({ hasText: 'Laptop' }).locator('input[type="checkbox"]').check();

  await rows.locator('#pagination a').filter({ hasText: '2' }).click();
  await rows.locator('#productTable tr').filter({ hasText: 'Action Camera' }).locator('input[type="checkbox"]').check();

  await rows.locator('#pagination a').filter({ hasText: '3' }).click();
  await rows.locator('#productTable tr').filter({ hasText: 'Desktop Computer' }).locator('input[type="checkbox"]').check();

  await rows.locator('#pagination a').filter({ hasText: '4' }).click();
  await rows.locator('#productTable tr').filter({ hasText: 'Wireless Mouse' }).locator('input[type="checkbox"]').check();
});


//await page.pause()

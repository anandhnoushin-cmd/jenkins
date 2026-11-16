import{test,expect} from'@playwright/test'
test("simple alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',async alert=>{
        console.log(alert.type());
        console.log(alert.message());

        expect(alert.message()).toBe("I am an alert box!")
        expect(alert.message("I am an alert box!"))
    
        await alert.accept()
    })

        await page.locator('//button[@id="alertBtn"]').click();
      await page.pause()
      await page.waitForTimeout(5000)  
    })


    test("confirmation alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',async alert=>{
        console.log(alert.type());
        

        expect(alert.message()).toBe("Press a button!")
        
        await alert.dismiss();
    })

        await page.locator('//button[@id="confirmBtn"]').click();
    
       await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!')
      //await page.pause()
    })
        
        
    
test("prompt alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async alert=>{
        console.log(alert.type());
        expect(alert.message().toBe("Please enter your name:"))
        await alert.accept("playwright")
        await page.locator('//button[@id="promptBtn"]').click()
        await expect(page.locator('//button[@id="demo"]').toHaveText('Hello playwright! How are you today?'))
        
        
        
       // await page.pause()
    })
})


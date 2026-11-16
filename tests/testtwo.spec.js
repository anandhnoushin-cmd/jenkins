
import{ test,expect} from'@playwright/test'
test("login using builtin locators",async({page})=>{
    await page.goto("https://demoqa.com/login");
    await page.getByRole("button",{name:"New User"}).click();
    await page.getByPlaceholder("First Name").fill("shalini")
    await page.getByPlaceholder("Last Name").fill("rajesh");
    await page.getByPlaceholder("UserName").fill("rathi");
    await page.getByPlaceholder("Password").fill("rathi@123");
    await page.getByRole("button",{name:"Register"}).click();
    await page.getByRole("button",{name:"Back to Login"}).click();
    await page.getByPlaceholder("UserName").fill("rathi");
    await page.getByPlaceholder("Password").fill("rathi@123");
    await page.getByRole("button",{name:"login"}).click();
    
    //await page.pause();
    
    
});

import{test,expect}from'@playwright/test'

test("page navigation",async({page})=>{
    await page.goto("https://www.facebook.com/login.php/")
    ;
})


//input@class=["form-control"][@placeholder="Enter Name"]
//input[@id="name"and@placeholder="Enter Name"]
//input[@placeholder="Enter Phone"or@placeholder="Enter EMail"]
//input[contains@(placeholder," EMail")]
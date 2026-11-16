class Orange{

    constructor(page){//parameter
        this.page=page;
        this.username=page.locator('//input[@name="username"]');
        this.password=page.locator('//input[@name="password"]');
        this.submit=page.locator('//button[@type="submit"]');

    }

    async navigation(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    }

    async login(uname,pword){
        await this.username.fill(uname);
        await this.password.fill(pword);
        await this.submit.click()
    }
}

export default Orange
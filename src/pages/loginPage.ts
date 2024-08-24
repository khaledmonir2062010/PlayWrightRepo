
import {Page} from "@playwright/test";
export default class LoginPage{

    constructor(public page:Page){}

    async enterEmail(emailaddress: string)
    {
        await this.page.locator("input[name='email']")
        .type(emailaddress)
    }
    async enterLoginPassword(password: string)
    {
        await this.page.locator("input[name='password']")
        .type(password)
    }

    async ClickLoginBtn()
    {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("input[value='Login']")
        ])
        
       
    }
}
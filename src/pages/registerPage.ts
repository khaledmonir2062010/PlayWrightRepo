import { Page } from "@playwright/test"

export default class RegisterPage{

    constructor  (public page:Page){ }

    async enterFirstName(firstname: string)
    {
        await this.page.locator("input-firstname")
        .type(firstname)
    }
    async enterLastName(lastname: string)
    {
        await this.page.locator("input[name='Lastname']")
        .type(lastname)
    }
    async enterEmail(email: string)
    {
        await this.page.locator("input[name='email']")
        .type(email)
    }

    async enterTelephone(phone: string)
    {
        await this.page.locator("input[name='telephone']")
        .type(phone)
    }

    async enterPassword(password: string)
    {
        await this.page.locator("input[name='password']")
        .type(password)
    }
    async enterConfirmPassword(phone: string)
    {
        await this.page.locator("input[name='confirm']")
        .type(phone)
    }

   isSubscribedchecked()
    {
        return  this.page.locator("#input-newsletter-no")
    }

    async ClickTermAndCondition(){
        await this.page.click("input[name='agree']")

    }

    async ClickContinueToRegister(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.click("input[value='Continue']")
       
        ])
         

    }

    
}
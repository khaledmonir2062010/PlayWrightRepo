import { test, expect } from "@playwright/test";
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"

const email = "Ktest@mailinator.com";
const password = "ktest@2222";

test ("Register test_01", async({page, baseURL})=>{

    const register= new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`)

    await register.enterFirstName("Ktest");
    await register.enterEmail(email);
    await register.enterTelephone("1234445666");
    await register.enterPassword(password);
    await register.enterConfirmPassword(password);

    expect (register.isSubscribedchecked()).toBeChecked();
    await register.ClickTermAndCondition();
    await register.ClickContinueToRegister();

})

test ("Login test_02",async({page, baseURL})=>{

    const login =new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`)
    await login.enterEmail(email);
    await login.enterLoginPassword(password);
    await login.ClickLoginBtn();

    expect(await page.title()).toBe("Account Login");

})
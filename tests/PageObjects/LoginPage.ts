import { Locator, Page, expect } from "@playwright/test"

export class LoginPage{

    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator
    private readonly shoppingCartIcon: Locator

    constructor(page: Page){
        this.usernameTextbox = page.getByRole('textbox', { name: 'Username' })
        this.passwordTextbox = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.shoppingCartIcon = page.locator("xpath=//a[contains(@class, 'shopping_cart_link')]")
    }

    async fillUsername(userName:string){
        await this.usernameTextbox.fill(userName)
    }

    async fillPassword(password:string){
        await this.passwordTextbox.fill(password)
    }

    async clickOnLogin() {
        await this.loginButton.click()
    }


    async loginWithCredentials(userName:string, password:string){
        await this.fillUsername(userName)
        await this.fillPassword(password)
        await this.clickOnLogin()
    }

    async checkSuccessfulLogin(){
        await expect(this.shoppingCartIcon).toBeVisible()
    }

}
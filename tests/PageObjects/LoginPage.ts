import { Locator, Page } from "@playwright/test"

export class LoginPage{

    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator

    constructor(page: Page){
        this.usernameTextbox = page.getByRole('textbox', { name: 'Username' })
        this.passwordTextbox = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
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

}
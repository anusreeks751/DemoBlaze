export class Login{
    constructor(page){
        this.page=page
        this.logInMenu=page.locator('#login2')
        this.loginUsername=page.locator('#loginusername')
        this.loginPassword=page.locator('#loginpassword')
        this.loginButton=page.getByRole('button', { name: 'Log in' });
        this.closeButton=page.locator("//button[text()='Close'])[3]")
        this.nameofUser=page.locator('#nameofuser')
        this.logoutMenu=page.locator('#logout2')
        this.logOutButton=page.locator("//a[text()='Log out']")

}
    async navigateToApplication(){
        await this.page.goto('https://www.demoblaze.com/')
    }
    async clickOnLoginMenu(){
        await this.logInMenu.click()
    }
    async loginWithValidUsername(){
        await this.loginUsername.fill("Anusree1")
    }
    async loginWithValidPassword(){
        await this.loginPassword.fill("anusree")
    }
    async clickOnLoginButton(){
        await this.loginButton.click()
    }
    async loginWithInvalidUsername(){
        await this.loginUsername.fill("Anusreexx")
    }
    async loginWithInvalidPassword(){
        await this.loginPassword.fill("anusreexx")
    }
    async clickOnLogoutButton(){
        await this.logOutButton.click()
    }
}
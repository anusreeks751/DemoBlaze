export class SignUp{
    constructor(page){
        this.page=page
        this.signUpMenu=page.locator('#signin2')
        this.username=page.locator('#sign-username')
        this.password=page.locator('#sign-password')
        this.signUpButton=page.locator("//button[text()='Sign up']")
        this.closeButton= page.locator('#signInModal .close')
        //page.locator("//button[text()='Close']")
        
    }
    async navigateToApplication(){
        await this.page.goto('https://www.demoblaze.com/')
    }
    async clickOnSignUpMenu(){
        await this.signUpMenu.click()
    }
    async enterSignUpUsername(){
        await this.username.fill("Anusreeanus34216")
    }
    async enterSignUpPassword(){
        await this.password.fill("anusree")
    }
    async clickOnSignUpButton(){
        await this.signUpButton.click()
    }
    async clickOnCloseButton(){
        await this.closeButton.click()
    }

}
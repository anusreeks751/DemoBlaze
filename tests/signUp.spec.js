import {expect, test} from  '@playwright/test'
import { SignUp } from '../Pages/SignUp.js'

test('user signUp with validUsername and Password', async({page})=>{

     page.on('dialog', async dialog => {
        console.log('Alert message:', dialog.message())
        expect(dialog.message()).toBe('Sign up successful.')
        await dialog.accept()
    })
    
    const signup=new SignUp(page)

    await signup.navigateToApplication()
    await signup.clickOnSignUpMenu()

    await signup.enterSignUpUsername()
    await signup.enterSignUpPassword()
    await signup.clickOnSignUpButton()

})

test ('user enters the data and click Close', async({page})=>{
    
    const signup= new SignUp(page)

    await signup.navigateToApplication()
    await signup.clickOnSignUpMenu()

    await signup.enterSignUpUsername()
    await signup.enterSignUpPassword()
    await signup.clickOnCloseButton()

     await expect(signup.signUpButton).not.toBeVisible()
})
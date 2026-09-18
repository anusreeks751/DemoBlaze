import {expect, test} from  '@playwright/test'
import { SignUp } from '../Pages/SignUp.js'
import {Login } from '../Pages/Login.js'
import { Indexpage } from '../Pages/Indexpage.js'

test('user login successfully and logout', async({page})=>{

    page.on('dialog', async dialog => {
        console.log('Alert message:', dialog.message());
        await dialog.accept()
    })

    const signup=new SignUp(page)
    const login=new Login(page)
    const homepage=new Indexpage(page)



    await login.navigateToApplication()
    await login.clickOnLoginMenu()

    await login.loginWithValidUsername()
    await login.loginWithValidPassword()
    await login.clickOnLoginButton()


    await login.clickOnLogoutButton()

    await expect(login.logInMenu).toBeVisible()

})
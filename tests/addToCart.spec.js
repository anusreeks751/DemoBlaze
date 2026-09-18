import {expect, test} from  '@playwright/test'
import { SignUp } from '../Pages/SignUp.js'
import {Login } from '../Pages/Login.js'
import { Indexpage } from '../Pages/Indexpage.js'

test('user signUp and login successfully', async({page})=>{
    const signup=new SignUp(page)
    const login=new Login(page)
    const homepage=new Indexpage(page)


    //login

    await login.navigateToApplication()

    await login.clickOnLoginMenu()

    await login.LoginWithValidUsername()
    await login.LoginWithValidPassword()

    await login.clickOnLoginButton()

    // await expect(login.logoutButton).toBeVisible()

    //add to cart
    await homepage.clickOnSamsunggalaxyS6()

    await homepage.addToCart()
     page.on('dialog', async dialog => {
        console.log('Alert message:', dialog.message())
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
    })

})
import {expect, test} from '@playwright/test'
import {SignUp} from '../Pages/SignUp'
import { Login } from '../Pages/Login'
import { Indexpage } from '../Pages/Indexpage'
import { Cart } from '../Pages/Cart'

test ('Verify Selecting a product under Monitors', async({page})=>{

    page.on('dialog', async dialog => {
        console.log('Alert message:', dialog.message());
        await dialog.accept()
    })
    
    const login=new Login(page)
    const signUp=new SignUp(page)
    const index=new Indexpage(page)
    const cart=new Cart(page)

    await signUp.navigateToApplication()

    await login.clickOnLoginMenu()
    await login.loginWithValidUsername()
    await login.loginWithValidPassword()
    await login.clickOnLoginButton()

    await index.clickOnMonitors()
    await index.selectAppleMonitor()

    await cart.clickOnCart()
    await cart.clickOnPlaceOrder()

    await cart.fillDetails()
    await cart.clickPurchase()

    await expect(cart.successMessage).toBeVisible()

})
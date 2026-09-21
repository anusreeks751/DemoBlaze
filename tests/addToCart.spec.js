import { expect, test } from '@playwright/test'
import { Login } from '../Pages/Login.js'
import { Indexpage } from '../Pages/Indexpage.js'

test('user login and add product to cart successfully', async ({ page }) => {

    const login = new Login(page)
    const homepage = new Indexpage(page)

    // Login
    await login.navigateToApplication()

    await login.clickOnLoginMenu()

    await login.loginWithValidUsername()
    await login.loginWithValidPassword()

    await login.clickOnLoginButton()

    // Wait for login to complete
    await expect(login.nameofUser).toBeVisible()

    // Select Samsung Galaxy S6
    await homepage.clickOnSamsunggalaxyS6()

    // Handle alert BEFORE clicking Add to Cart
    page.on('dialog', async dialog => {
        console.log('Alert message:', dialog.message())
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
    })

    // Add product to cart
    await homepage.addToCart()
})
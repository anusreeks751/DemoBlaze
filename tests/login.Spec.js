import {expect, test} from '@playwright/test'
import { Login } from '../Pages/Login'

test('login with Valid username and valid password', async({page})=>{

    const login=new Login(page)
    await login.navigateToApplication()
    await login.clickOnLoginMenu()
    await login.loginWithValidUsername()
    await login.loginWithValidPassword()
    await login.clickOnLoginButton()

    // await page.waitForLoadState('networkidle')
    await expect(login.logOutButton).toBeVisible();
})

test('login with invalid username and valid password', async ({ page }) => {
    page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('User does not exist.')
    await dialog.accept()})

    const login = new Login(page)

    await login.navigateToApplication()
    await login.clickOnLoginMenu()

    await login.loginWithInvalidUsername()
    await login.loginWithValidPassword()
    await login.clickOnLoginButton()

    
})

test('login with valid username and invalid password', async({page})=>{

    page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('Wrong password.')
    await dialog.accept();
})

    const login=new Login(page)

    await login.navigateToApplication()
    await login.clickOnLoginMenu()

    await login.loginWithValidUsername()
    await login.loginWithValidPassword()
    await login.clickOnLoginButton()

    
})


test('login with invalid username and invalid password', async({page})=>{

    page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('User does not exist.')
    await dialog.accept();
})


    const login=new Login(page)

    await login.navigateToApplication()
    await login.clickOnLoginMenu()

    await login.loginWithInvalidUsername()
    await login.loginWithInvalidPassword()
    await login.clickOnLoginButton()

    // await page.waitForLoadState('networkidle')
})
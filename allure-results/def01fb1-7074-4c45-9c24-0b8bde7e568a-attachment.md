# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.Spec.js >> login with invalid username and invalid password
- Location: tests/login.Spec.js:55:6

# Error details

```
TypeError: login.clickOnLoginMenu is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import {expect, test} from '@playwright/test'
  2  | import { Login } from '../Pages/Login'
  3  | 
  4  | test('login with Valid username and valid password', async({page})=>{
  5  |     const login=new Login(page)
  6  |     await login.navigateToApplication()
  7  |     await login.clickOnLoginMenu()
  8  |     await login.LoginWithValidUsername()
  9  |     await login.LoginWithValidPassword()
  10 |     await login.clickOnLoginButton()
  11 | 
  12 |     // await page.waitForLoadState('networkidle')
  13 |     await expect(login.logoutButton).toBeVisible()
  14 | })
  15 | 
  16 | test('login with invalid username and valid password', async ({ page }) => {
  17 | 
  18 |     page.on('dialog', async dialog => {
  19 |         console.log('Alert message:', dialog.message());
  20 |         await dialog.accept()
  21 |     })
  22 | 
  23 |     const login = new Login(page)
  24 | 
  25 |     await login.navigateToApplication()
  26 |     await login.clickOnLoginMenu()
  27 | 
  28 |     await login.LoginWithInvalidUsername()
  29 |     await login.LoginWithValidPassword()
  30 |     await login.clickOnLoginButton()
  31 | 
  32 |     await expect(login.closeButton).toBeVisible()
  33 | })
  34 | 
  35 | test('login with valid username and invalid password', async({page})=>{
  36 | 
  37 |     page.on('dialog', async dialog => {
  38 |         console.log('Alert message:', dialog.message());
  39 |         await dialog.accept()
  40 |     })
  41 | 
  42 |     const login=new Login(page)
  43 | 
  44 |     await login.navigateToApplication()
  45 |     await login.clickOnLoginMenu()
  46 | 
  47 |     await login.LoginWithValidUsername()
  48 |     await login.LoginWithInvalidPassword()
  49 |     await login.clickOnLoginButton()
  50 | 
  51 |     await expect(login.closeButton).toBeVisible()
  52 | })
  53 | 
  54 | 
  55 | test.only('login with invalid username and invalid password', async({page})=>{
  56 | page.on('dialog', async dialog => {
  57 |         console.log('Alert message:', dialog.message());
  58 |         await dialog.accept()
  59 |     })
  60 | 
  61 |     const login=new Login(page)
  62 | 
  63 |     await login.navigateToApplication()
> 64 |     await login.clickOnLoginMenu()
     |                 ^ TypeError: login.clickOnLoginMenu is not a function
  65 | 
  66 |     await login.LoginWithInvalidUsername()
  67 |     await login.LoginWithInvalidPassword()
  68 |     await login.clickOnLoginButton()
  69 | 
  70 |     await expect(login.closeButton).toBeVisible()
  71 | 
  72 | })
```
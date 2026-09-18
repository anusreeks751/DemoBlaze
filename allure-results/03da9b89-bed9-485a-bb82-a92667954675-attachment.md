# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2Eflow.spec.js >> user signUp and login successfully
- Location: tests/E2Eflow.spec.js:5:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sign up successful."
Received: "This user already exist."
```

# Test source

```ts
  1  | import {expect, test} from  '@playwright/test'
  2  | import { SignUp } from '../Pages/SignUp.js'
  3  | import {Login } from '../Pages/Login.js'
  4  | 
  5  | test('user signUp and login successfully', async({page})=>{
  6  |     const signup=new SignUp(page)
  7  |     const login=new Login(page)
  8  | 
  9  |     //sign up
  10 | 
  11 |     await signup.navigateToApplication()
  12 |     await signup.clickOnSignUpMenu()
  13 | 
  14 |     await signup.enterSignUpUsername()
  15 |     await signup.enterSignUpPassword()
  16 | 
  17 |     page.on('dialog', async dialog => {
  18 |         console.log('Alert message:', dialog.message())
> 19 |         expect(dialog.message()).toBe('Sign up successful.')
     |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  20 |         await dialog.accept()
  21 |     })
  22 | 
  23 |     await signup.clickOnSignUpButton()
  24 | 
  25 |     //login
  26 | 
  27 | 
  28 |     await login.clickOnLoginMenu()
  29 | 
  30 |     await login.LoginWithValidUsername()
  31 |     await login.LoginWithValidPassword()
  32 | 
  33 |     await login.clickOnLoginButton()
  34 | 
  35 |     await expect(login.logoutButton).toBeVisible()
  36 | 
  37 | 
  38 | })
  39 | 
```
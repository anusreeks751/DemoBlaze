# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.Spec.js >> login with invalid username and invalid password
- Location: tests/login.Spec.js:55:6

# Error details

```
TypeError: login.LoginWithInvalidUsername is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog [active] [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Log in" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]:
            - generic [ref=e11]: "Username:"
            - textbox [ref=e12]
          - generic [ref=e13]:
            - generic [ref=e14]: "Password:"
            - textbox [ref=e15]
        - generic [ref=e17]:
          - button "Close" [ref=e18]
          - button "Log in" [ref=e19]
  - text:             
  - navigation [ref=e20]:
    - link "PRODUCT STORE" [ref=e21] [cursor=pointer]:
      - /url: index.html
    - list [ref=e24]:
      - listitem [ref=e25]:
        - link "Home (current)" [ref=e26] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e27]: (current)
      - listitem [ref=e28]:
        - link "Contact" [ref=e29] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e30]:
        - link "About us" [ref=e31] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e32]:
        - link "Cart" [ref=e33] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e34]:
        - link "Log in" [ref=e35] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e36]:
        - link "Sign up" [ref=e37] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e39]:
      - list [ref=e40]:
        - listitem [ref=e41] [cursor=pointer]
        - listitem [ref=e42] [cursor=pointer]
        - listitem [ref=e43] [cursor=pointer]
      - img "First slide" [ref=e46]
      - button "Previous" [ref=e47] [cursor=pointer]
      - button "Next" [ref=e50] [cursor=pointer]
  - generic [ref=e54]:
    - generic [ref=e56]:
      - link "CATEGORIES" [ref=e57] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e58] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e59] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e60] [cursor=pointer]:
        - /url: "#"
    - list [ref=e63]:
      - listitem [ref=e64]:
        - button "Previous" [ref=e65]
      - listitem [ref=e66]:
        - button "Next" [ref=e67] [cursor=pointer]
  - generic [ref=e69]:
    - generic [ref=e72]:
      - heading "About Us" [level=4] [ref=e73]
      - paragraph [ref=e74]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e77]:
      - heading "Get in Touch" [level=4] [ref=e78]
      - paragraph [ref=e79]: "Address: 2390 El Camino Real"
      - paragraph [ref=e80]: "Phone: +440 123456"
      - paragraph [ref=e81]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e85]
  - contentinfo [ref=e87]:
    - paragraph [ref=e88]: Copyright © Product Store
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
  64 |     await login.clickOnLoginMenu()
  65 | 
> 66 |     await login.LoginWithInvalidUsername()
     |                 ^ TypeError: login.LoginWithInvalidUsername is not a function
  67 |     await login.LoginWithInvalidPassword()
  68 |     await login.clickOnLoginButton()
  69 | 
  70 |     await expect(login.closeButton).toBeVisible()
  71 | 
  72 | })
```
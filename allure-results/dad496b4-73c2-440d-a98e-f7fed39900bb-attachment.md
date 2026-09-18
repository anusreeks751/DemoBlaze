# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.Spec.js >> login with Valid username and valid password
- Location: tests/login.Spec.js:4:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('//a[text()=\'Log out\']')
Expected: visible
Received: hidden
Timeout:  10000ms

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('//a[text()=\'Log out\']')
    23 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
       - unexpected value "hidden"

```

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: Anusree
    - text: "Password:"
    - textbox: anusree
    - button "Close"
    - button "Log in"
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "Third slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- link:
  - /url: prod.html?idp_=1
- heading "Samsung galaxy s6" [level=4]:
  - link "Samsung galaxy s6":
    - /url: prod.html?idp_=1
- heading "$360" [level=5]
- paragraph: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
- link:
  - /url: prod.html?idp_=2
- heading "Nokia lumia 1520" [level=4]:
  - link "Nokia lumia 1520":
    - /url: prod.html?idp_=2
- heading "$820" [level=5]
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- link:
  - /url: prod.html?idp_=3
- heading "Nexus 6" [level=4]:
  - link "Nexus 6":
    - /url: prod.html?idp_=3
- heading "$650" [level=5]
- paragraph: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
- link:
  - /url: prod.html?idp_=4
- heading "Samsung galaxy s7" [level=4]:
  - link "Samsung galaxy s7":
    - /url: prod.html?idp_=4
- heading "$800" [level=5]
- paragraph: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
- link:
  - /url: prod.html?idp_=5
- heading "Iphone 6 32gb" [level=4]:
  - link "Iphone 6 32gb":
    - /url: prod.html?idp_=5
- heading "$790" [level=5]
- paragraph: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
- link:
  - /url: prod.html?idp_=6
- heading "Sony xperia z5" [level=4]:
  - link "Sony xperia z5":
    - /url: prod.html?idp_=6
- heading "$320" [level=5]
- paragraph: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
- link:
  - /url: prod.html?idp_=7
- heading "HTC One M9" [level=4]:
  - link "HTC One M9":
    - /url: prod.html?idp_=7
- heading "$700" [level=5]
- paragraph: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
- link:
  - /url: prod.html?idp_=8
- heading "Sony vaio i5" [level=4]:
  - link "Sony vaio i5":
    - /url: prod.html?idp_=8
- heading "$790" [level=5]
- paragraph: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
- link:
  - /url: prod.html?idp_=9
- heading "Sony vaio i7" [level=4]:
  - link "Sony vaio i7":
    - /url: prod.html?idp_=9
- heading "$790" [level=5]
- paragraph: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import {expect, test} from '@playwright/test'
  2  | import { Login } from '../Pages/Login'
  3  | 
  4  | test('login with Valid username and valid password', async({page})=>{
  5  | 
  6  |     const login=new Login(page)
  7  |     await login.navigateToApplication()
  8  |     await login.clickOnLoginMenu()
  9  |     await login.loginWithValidUsername()
  10 |     await login.loginWithValidPassword()
  11 |     await login.clickOnLoginButton()
  12 | 
  13 |     // await page.waitForLoadState('networkidle')
> 14 |     await expect(login.logOutButton).toBeVisible({ timeout: 10000 });
     |                                      ^ Error: expect(locator).toBeVisible() failed
  15 | })
  16 | 
  17 | test('login with invalid username and valid password', async ({ page }) => {
  18 | 
  19 | 
  20 |     const login = new Login(page)
  21 | 
  22 |     await login.navigateToApplication()
  23 |     await login.clickOnLoginMenu()
  24 | 
  25 |     await login.loginWithInvalidUsername()
  26 |     await login.loginWithValidPassword()
  27 |     await login.clickOnLoginButton()
  28 | 
  29 |     // await expect(login.closeButton).toBeVisible()
  30 | })
  31 | 
  32 | test('login with valid username and invalid password', async({page})=>{
  33 | 
  34 |     page.on('dialog', async dialog => {
  35 |     expect(dialog.message()).toBe('Wrong password.')
  36 |     await dialog.accept();
  37 | })
  38 | 
  39 |     const login=new Login(page)
  40 | 
  41 |     await login.navigateToApplication()
  42 |     await login.clickOnLoginMenu()
  43 | 
  44 |     await login.loginWithValidUsername()
  45 |     await login.loginWithValidPassword()
  46 |     await login.clickOnLoginButton()
  47 | 
  48 |     
  49 | })
  50 | 
  51 | 
  52 | test('login with invalid username and invalid password', async({page})=>{
  53 | 
  54 |     page.on('dialog', async dialog => {
  55 |     expect(dialog.message()).toBe('User does not exist.')
  56 |     await dialog.accept();
  57 | })
  58 | 
  59 | 
  60 |     const login=new Login(page)
  61 | 
  62 |     await login.navigateToApplication()
  63 |     await login.clickOnLoginMenu()
  64 | 
  65 |     await login.loginWithInvalidUsername()
  66 |     await login.loginWithInvalidPassword()
  67 |     await login.clickOnLoginButton()
  68 | 
  69 |     // await page.waitForLoadState('networkidle')
  70 | })
```
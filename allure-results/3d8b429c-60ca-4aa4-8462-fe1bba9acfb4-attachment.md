# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.Spec.js >> login with invalid username and valid password
- Location: tests/login.Spec.js:16:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//button[text()=\'Close\'])[3]')
Expected: visible
Error: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//button[text()='Close'])[3]' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6296:25)
    at InjectedScript._queryEngineAll (<anonymous>:6969:49)
    at InjectedScript.querySelectorAll (<anonymous>:6956:30)
    at callMatchedElements (eval at evaluate (:311:30), <anonymous>:2:29)
    at UtilityScript.evaluate (<anonymous>:313:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//button[text()=\'Close\'])[3]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Log in" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]:
            - generic [ref=e11]: "Username:"
            - textbox [ref=e12]: Anusreexx
          - generic [ref=e13]:
            - generic [ref=e14]: "Password:"
            - textbox [ref=e15]: anusree
        - generic [ref=e17]:
          - button "Close" [ref=e18]
          - button "Log in" [active] [ref=e19]
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
      - generic [ref=e44]:
        - img "First slide" [ref=e46]
        - img "Second slide" [ref=e48]
      - button "Previous" [ref=e49] [cursor=pointer]
      - button "Next" [ref=e52] [cursor=pointer]
  - generic [ref=e56]:
    - generic [ref=e58]:
      - link "CATEGORIES" [ref=e59] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e60] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e61] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e62] [cursor=pointer]:
        - /url: "#"
    - list [ref=e65]:
      - listitem [ref=e66]:
        - button "Previous" [ref=e67]
      - listitem [ref=e68]:
        - button "Next" [ref=e69] [cursor=pointer]
  - generic [ref=e71]:
    - generic [ref=e74]:
      - heading "About Us" [level=4] [ref=e75]
      - paragraph [ref=e76]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e79]:
      - heading "Get in Touch" [level=4] [ref=e80]
      - paragraph [ref=e81]: "Address: 2390 El Camino Real"
      - paragraph [ref=e82]: "Phone: +440 123456"
      - paragraph [ref=e83]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e87]
  - contentinfo [ref=e89]:
    - paragraph [ref=e90]: Copyright © Product Store
```
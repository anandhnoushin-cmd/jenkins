# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: miniproject.spec.js >> miniproject
- Location: tests\miniproject.spec.js:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//div[contains(text()="payment information")]')
Expected: visible
Error: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//div[contains(text()="payment information")]' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6481:25)
    at InjectedScript._queryEngineAll (<anonymous>:7241:49)
    at InjectedScript.querySelectorAll (<anonymous>:7228:30)
    at eval (eval at evaluate (:370:30), <anonymous>:2:42)
    at UtilityScript.evaluate (<anonymous>:372:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)

Call log:
  - Expect "toBeVisible" locator('//div[contains(text()="payment information")]') with timeout 5000ms
  - waiting for locator('//div[contains(text()="payment information")]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - button "Cart, 1 items" [ref=e13]:
          - generic [ref=e14]: "1"
      - generic [ref=e15]: "Checkout: Overview"
    - main [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e20]: QTY
          - generic [ref=e21]: Description
          - generic [ref=e22]:
            - generic [ref=e23]: "1"
            - generic [ref=e24]:
              - button "View details for Sauce Labs Onesie" [ref=e25] [cursor=pointer]:
                - generic [ref=e26]: Sauce Labs Onesie
              - generic [ref=e27]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
              - generic [ref=e28]: $7.99
        - generic [ref=e30]:
          - generic [ref=e31]: "Payment Information:"
          - generic [ref=e32]: "SauceCard #31337"
          - generic [ref=e33]: "Shipping Information:"
          - generic [ref=e34]: Free Pony Express Delivery!
          - generic [ref=e35]: Price Total
          - generic [ref=e36]: "Item total: $7.99"
          - generic [ref=e37]: "Tax: $0.64"
          - generic [ref=e38]: "Total: $8.63"
          - generic [ref=e39]:
            - button "Cancel" [ref=e40] [cursor=pointer]
            - button "Finish" [ref=e41] [cursor=pointer]
  - contentinfo [ref=e42]:
    - list [ref=e43]:
      - listitem [ref=e44]:
        - link "X" [ref=e45] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e46]:
        - link "Facebook" [ref=e47] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e48]:
        - link "LinkedIn" [ref=e49] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e50]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkbox2.spec.js >> multiple checkbox
- Location: tests\checkbox2.spec.js:15:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - banner [ref=e7]:
    - generic [ref=e13]:
      - heading "Automation Testing Practice" [level=1] [ref=e15]
      - paragraph [ref=e17]: For Selenium, Cypress & Playwright
  - generic [ref=e22]:
    - heading "Pages" [level=2] [ref=e23]
    - list [ref=e25]:
      - listitem [ref=e26]:
        - link "Home" [ref=e27] [cursor=pointer]:
          - /url: http://testautomationpractice.blogspot.com/
      - listitem [ref=e28]:
        - link "Udemy Courses" [ref=e29] [cursor=pointer]:
          - /url: https://www.pavanonlinetrainings.com/#udemy
      - listitem [ref=e30]:
        - link "Online Trainings" [ref=e31] [cursor=pointer]:
          - /url: https://www.pavanonlinetrainings.com/
      - listitem [ref=e32]:
        - link "Blog" [ref=e33] [cursor=pointer]:
          - /url: https://www.pavantestingtools.com/
      - listitem [ref=e34]:
        - link "PlaywrightPractice" [ref=e35] [cursor=pointer]:
          - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
  - generic [ref=e49]:
    - heading [level=3] [ref=e50]:
      - link "Data Entry Form" [ref=e51] [cursor=pointer]:
        - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
    - generic [ref=e52]:
      - generic [ref=e53]:
        - text: "Name:"
        - textbox "Enter Name" [ref=e54]
        - text: "Email:"
        - textbox "Enter EMail" [ref=e55]
        - text: "Phone:"
        - textbox "Enter Phone" [ref=e56]
      - generic [ref=e57]:
        - text: "Address:"
        - textbox "Address:" [ref=e58]
      - generic [ref=e59]:
        - text: "Gender:"
        - generic [ref=e60]:
          - radio "Male" [ref=e61]
          - text: Male
        - generic [ref=e62]:
          - radio "Female" [ref=e63]
          - text: Female
      - generic [ref=e64]:
        - text: "Days:"
        - generic [ref=e65]:
          - checkbox "Sunday" [ref=e66]
          - text: Sunday
        - generic [ref=e67]:
          - checkbox "Monday" [ref=e68]
          - text: Monday
        - generic [ref=e69]:
          - checkbox "Tuesday" [ref=e70]
          - text: Tuesday
        - generic [ref=e71]:
          - checkbox "Wednesday" [ref=e72]
          - text: Wednesday
        - generic [ref=e73]:
          - checkbox "Thursday" [ref=e74]
          - text: Thursday
        - generic [ref=e75]:
          - checkbox "Friday" [ref=e76]
          - text: Friday
        - generic [ref=e77]:
          - checkbox "Saturday" [ref=e78]
          - text: Saturday
      - generic [ref=e79]:
        - text: "Country:"
        - combobox "Country:" [ref=e80]:
          - option "United States" [selected]
          - option "Canada"
          - option "United Kingdom"
          - option "Germany"
          - option "France"
          - option "Australia"
          - option "Japan"
          - option "China"
          - option "Brazil"
          - option "India"
      - generic [ref=e81]:
        - text: "Colors:"
        - listbox "Colors:" [ref=e82]:
          - option "Red" [ref=e83]
          - option "Blue" [ref=e84]
          - option "Green" [ref=e85]
          - option "Yellow" [ref=e86]
          - option "Red" [ref=e87]
          - option "White" [ref=e88]
          - option "Green" [ref=e89]
      - generic [ref=e90]:
        - text: "Sorted List:"
        - listbox "Sorted List:" [ref=e91]:
          - option "Cat" [ref=e92]
          - option "Cheetah" [ref=e93]
          - option "Deer" [ref=e94]
          - option "Dog" [ref=e95]
          - option "Elephant" [ref=e96]
          - option "Fox" [ref=e97]
          - option "Giraffe" [ref=e98]
          - option "Lion" [ref=e99]
          - option "Rabbit" [ref=e100]
          - option "Zebra" [ref=e101]
```

# Test source

```ts
  1  | import{test,expect} from'@playwright/test'
  2  | test("checkbox",async({page})=>{
  3  |     await page.goto("https://testautomationpractice.blogspot.com/")
  4  |     await page.locator('//input[@id="monday"]').check()
  5  |     await expect(page.locator('//input[@id="monday"]')).toBeChecked()
  6  | 
  7  |     
  8  | 
  9  |     await page.locator('//input[@id="monday"]').uncheck()
  10 | 
  11 |     await page.pause()
  12 | })
  13 | 
  14 | 
  15 | test.only("multiple checkbox",async({page})=>{
> 16 |     await page.goto("https://testautomationpractice.blogspot.com/")
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  17 |     let locat='//input[@id="sunday"]'//input[@id="monday"]'//input[@id="wednesday"]'//input[@id="friday"]'
  18 |     for(let checkbox of locat){
  19 |         await page.locator(checkbox).check()
  20 |         await expect(page.locator(checkbox)).toBeChecked()
  21 | 
  22 |     }
  23 | 
  24 |     let day
  25 | 
  26 | 
  27 | })
  28 | 
```
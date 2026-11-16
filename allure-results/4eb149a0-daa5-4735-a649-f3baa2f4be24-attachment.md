# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fileupload.spec.js >> file download
- Location: tests\fileupload.spec.js:24:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demo.automationtesting.in/FileDownload.html", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7] [cursor=pointer]:
        - /url: http://www.automationtesting.in
        - img "image not displaying" [ref=e8]
      - heading "Automation Demo Site" [level=1] [ref=e10]
    - navigation [ref=e11]:
      - generic [ref=e13]:
        - insertion [ref=e15]:
          - generic [ref=e18]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e20]: Discover more
            - link "Earn a CS Degree" [ref=e21] [cursor=pointer]
            - link "Source Robotics" [ref=e26] [cursor=pointer]
            - link "Learn to Code" [ref=e31] [cursor=pointer]
        - list [ref=e36]:
          - listitem [ref=e37]:
            - link "Home" [ref=e38] [cursor=pointer]:
              - /url: Index.html
          - listitem [ref=e39]:
            - link "Register" [ref=e40] [cursor=pointer]:
              - /url: Register.html
          - listitem [ref=e41]:
            - link "WebTable" [ref=e42] [cursor=pointer]:
              - /url: WebTable.html
          - listitem [ref=e43]:
            - link "SwitchTo" [ref=e44] [cursor=pointer]:
              - /url: SwitchTo.html
            - generic [ref=e45]: 
          - listitem [ref=e46]:
            - link "Widgets" [ref=e47] [cursor=pointer]:
              - /url: Widgets.html
            - generic [ref=e48]: 
          - listitem [ref=e49]:
            - link "Interactions" [ref=e50] [cursor=pointer]:
              - /url: Interactions.html
            - generic [ref=e51]: 
          - listitem [ref=e52]:
            - link "Video" [ref=e53] [cursor=pointer]:
              - /url: SwitchTo.html
            - generic [ref=e54]: 
          - listitem [ref=e55]:
            - link "WYSIWYG" [ref=e56] [cursor=pointer]:
              - /url: WYSIWYG.html
            - generic [ref=e57]: 
          - listitem [ref=e58]:
            - link "More" [ref=e59] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e60]: 
          - listitem [ref=e61]:
            - link "Practice Site" [ref=e62] [cursor=pointer]:
              - /url: http://practice.automationtesting.in/
  - generic [ref=e63]:
    - generic [ref=e66]:
      - heading "File Download Demo for Automation" [level=2] [ref=e67]
      - link "Download" [ref=e69] [cursor=pointer]:
        - /url: https://github.com//sakinala/AutomationTesting/raw/master/samplefile.pdf
      - generic [ref=e70]:
        - generic [ref=e71]:
          - text: Generated Text File to Download
          - link "Source Robotics" [ref=e72] [cursor=pointer]
        - generic [ref=e76]:
          - paragraph [ref=e77]: By default Download link will be hidden.
          - insertion [ref=e79]
          - paragraph [ref=e81]:
            - text: You need to enter
            - link "data" [ref=e82] [cursor=pointer]:
              - /url: "#"
            - text: in the textarea and click on 'Generate File' button to activate download link.
          - paragraph [ref=e85]:
            - link "Data" [ref=e86] [cursor=pointer]:
              - /url: "#"
            - text: entered in the below textarea will be download with file name 'info.txt'.
          - generic [ref=e89]:
            - generic [ref=e90]: "Enter Data:"
            - textbox [ref=e91]
            - generic [ref=e92]:
              - text: 1000 characters remaining
              - link "Compare SSDs" [ref=e93] [cursor=pointer]
          - button "Generate File" [disabled] [ref=e97]
      - generic [ref=e98]:
        - generic [ref=e99]: Generated PDF File to Download
        - generic [ref=e100]:
          - paragraph [ref=e101]: By default Download link will be hidden.
          - insertion [ref=e103]
          - paragraph [ref=e105]:
            - text: You need to enter data in the textarea and click on 'Generate File' button to activate download link.
            - link "Earn a CS Degree" [ref=e106] [cursor=pointer]
          - paragraph [ref=e110]: Data entered in the below textarea will be download with file name 'info.pdf'.
          - generic [ref=e111]:
            - generic [ref=e112]: "Enter Data:"
            - textbox [ref=e113]
            - generic [ref=e114]: 1000 characters remaining
          - button "Generate File" [disabled] [ref=e115]
    - generic [ref=e117]:
      - insertion [ref=e120]:
        - generic [ref=e123]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e125]: Discover more
          - link "Compare SSDs" [ref=e126] [cursor=pointer]
          - link "data" [ref=e131] [cursor=pointer]
          - link "Data" [ref=e136] [cursor=pointer]
      - insertion [ref=e143]:
        - generic [ref=e146]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e148]: Discover more
          - link "Upgrade Tech" [ref=e149] [cursor=pointer]
          - link "Store Big Data" [ref=e154] [cursor=pointer]
          - link "Browse Reference" [ref=e159] [cursor=pointer]
      - insertion [ref=e166]:
        - generic [ref=e169]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e171]: Discover more
          - link "Try Office Apps" [ref=e172] [cursor=pointer]
          - link "Try Dev Tools" [ref=e177] [cursor=pointer]
          - link "Learn to Code" [ref=e182] [cursor=pointer]
    - generic [ref=e189]:
      - generic [ref=e190]:
        - text: "\"@ 2016\""
        - link "Automation Testing" [ref=e191] [cursor=pointer]:
          - /url: "#"
        - text: "\"All Rights Reserved.\""
      - generic [ref=e192]:
        - link "" [ref=e193] [cursor=pointer]:
          - /url: https://www.facebook.com/automationtesting2016/
        - link "" [ref=e195] [cursor=pointer]:
          - /url: https://twitter.com/krishnasakinala
        - link "" [ref=e197] [cursor=pointer]:
          - /url: https://www.linkedin.com/nhome/?trk=hb_signin
        - link "" [ref=e199] [cursor=pointer]:
          - /url: https://plus.google.com/105286300926085335367
        - link "" [ref=e201] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
```

# Test source

```ts
  1  | import {test,expect, chromium}from'@playwright/test'
  2  | 
  3  | test("file upload",async({page})=>{
  4  |     await page.goto("https://testautomationpractice.blogspot.com/")
  5  |     await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/Acer Swift Go/Downloads/WhatsApp_Image_2026-05-27_at_1.32.24_PM-removebg-preview (1).png")
  6  |     await page.locator('//button[text()="Upload Single File"]').click()
  7  |     await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: WhatsApp_Image_2026-05-27_at_1.32.24_PM-removebg-preview (1).png, Size: 194558 bytes, Type: image/png")
  8  |     await page.pause()
  9  | })
  10 | 
  11 | 
  12 | test("multiple file upload",async({page})=>{
  13 |     await page.goto("https://testautomationpractice.blogspot.com/")
  14 |     await page.locator('//input[@id="multipleFilesInput"]').setInputFiles("C:/Users/Acer Swift Go/Downloads/Abhibus_E_Ticket-2999.pdf","C:/Users/Acer Swift Go/Downloads/Abhibus_AZ5871092178.pdf")     
  15 | await page.locator('//button[text()="Upload Multiple Files"]').click()
  16 |     await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText("Multiple files selected")
  17 |     await page.pause()
  18 | 
  19 |      await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([]) 
  20 |      await page.pause()    
  21 | })
  22 | 
  23 | 
  24 | test.only("file download",async({page})=>{
> 25 |     await page.goto("https://demo.automationtesting.in/FileDownload.html")
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  26 | const[downloadedfile]=await Promise.all([
  27 |     page.waitForEvent('download'),
  28 |     page.locator('//a[text()="Download" and@type="button"]').click()
  29 | ])
  30 | const file="C:/Users/Acer Swift Go/Downloads/files download"
  31 | await downloadedfile.saveAs('files download')
  32 | await page.pause()
  33 | })
  34 | 
  35 | 
  36 | 
  37 | 
```
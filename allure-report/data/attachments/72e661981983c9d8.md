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
Error: download.saveAs: canceled
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
            - link "Try Office Apps" [ref=e21] [cursor=pointer]
            - link "Try Cloud Tools" [ref=e26] [cursor=pointer]
            - link "Try Dev Tools" [ref=e31] [cursor=pointer]
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
      - link "Download" [active] [ref=e69] [cursor=pointer]:
        - /url: https://github.com//sakinala/AutomationTesting/raw/master/samplefile.pdf
      - generic [ref=e70]:
        - generic [ref=e71]:
          - text: Generated Text File to Download
          - link "Source Robotics" [ref=e72] [cursor=pointer]
        - generic [ref=e76]:
          - paragraph [ref=e77]: By default Download link will be hidden.
          - generic:
            - insertion:
              - iframe [ref=e79]
          - paragraph [ref=e80]:
            - text: You need to enter
            - link "data" [ref=e81] [cursor=pointer]:
              - /url: "#"
            - text: in the textarea and click on 'Generate File' button to activate download link.
          - paragraph [ref=e84]:
            - link "Data" [ref=e85] [cursor=pointer]:
              - /url: "#"
            - text: entered in the below textarea will be download with file name 'info.txt'.
          - generic [ref=e88]:
            - generic [ref=e89]: "Enter Data:"
            - textbox [ref=e90]
            - generic [ref=e91]:
              - text: 1000 characters remaining
              - link "Compare SSDs" [ref=e92] [cursor=pointer]
          - button "Generate File" [disabled] [ref=e96]
      - generic [ref=e97]:
        - generic [ref=e98]: Generated PDF File to Download
        - generic [ref=e99]:
          - paragraph [ref=e100]: By default Download link will be hidden.
          - insertion [ref=e102]:
            - generic [ref=e105]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=e107]: Discover more
              - link "Store Big Data" [ref=e108] [cursor=pointer]
              - link "Browse Reference" [ref=e113] [cursor=pointer]
              - link "Earn a CS Degree" [ref=e118] [cursor=pointer]
          - paragraph [ref=e123]:
            - text: You need to enter data in the textarea and click on 'Generate File' button to activate download link.
            - link "Upgrade Tech" [ref=e124] [cursor=pointer]
          - paragraph [ref=e128]: Data entered in the below textarea will be download with file name 'info.pdf'.
          - generic [ref=e129]:
            - generic [ref=e130]: "Enter Data:"
            - textbox [ref=e131]
            - generic [ref=e132]: 1000 characters remaining
          - button "Generate File" [disabled] [ref=e133]
    - generic [ref=e135]:
      - insertion [ref=e138]:
        - generic [ref=e141]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e143]: Discover more
          - link "Store Big Data" [ref=e144] [cursor=pointer]
          - link "data" [ref=e149] [cursor=pointer]
          - link "Browse Reference" [ref=e154] [cursor=pointer]
      - insertion [ref=e161]:
        - generic [ref=e164]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e166]: Discover more
          - link "Compare SSDs" [ref=e167] [cursor=pointer]
          - link "Upgrade Tech" [ref=e172] [cursor=pointer]
          - link "Data" [ref=e177] [cursor=pointer]
      - insertion [ref=e184]:
        - generic [ref=e187]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e189]: Discover more
          - link "Earn a CS Degree" [ref=e190] [cursor=pointer]
          - link "Source Robotics" [ref=e195] [cursor=pointer]
          - link "Learn to Code" [ref=e200] [cursor=pointer]
    - generic:
      - insertion:
        - iframe [ref=e206]
    - generic [ref=e209]:
      - generic [ref=e210]:
        - text: "\"@ 2016\""
        - link "Automation Testing" [ref=e211] [cursor=pointer]:
          - /url: "#"
        - text: "\"All Rights Reserved.\""
      - generic [ref=e212]:
        - link "" [ref=e213] [cursor=pointer]:
          - /url: https://www.facebook.com/automationtesting2016/
        - link "" [ref=e215] [cursor=pointer]:
          - /url: https://twitter.com/krishnasakinala
        - link "" [ref=e217] [cursor=pointer]:
          - /url: https://www.linkedin.com/nhome/?trk=hb_signin
        - link "" [ref=e219] [cursor=pointer]:
          - /url: https://plus.google.com/105286300926085335367
        - link "" [ref=e221] [cursor=pointer]:
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
  25 |     await page.goto("https://demo.automationtesting.in/FileDownload.html")
  26 | const[downloadedfile]=await Promise.all([
  27 |     page.waitForEvent('download'),
  28 |     page.locator('//a[text()="Download" and@type="button"]').click()
  29 | ])
  30 | const file="C:/Users/Acer Swift Go/Downloads/files download"
> 31 | await downloadedfile.saveAs('files download')
     |                      ^ Error: download.saveAs: canceled
  32 | await page.pause()
  33 | })
  34 | 
  35 | 
  36 | 
  37 | 
```
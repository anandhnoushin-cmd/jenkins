# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> login using xpath
- Location: tests\login.spec.js:12:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.facebook.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e12]:
  - generic [ref=e17]:
    - generic [ref=e18]: Explore the things you love.
    - generic [ref=e38]:
      - generic [ref=e39]: Log in to Facebook
      - generic [ref=e50]:
        - textbox "Email address or mobile number" [ref=e55]
        - textbox "Password" [ref=e60]
        - button "Log in" [ref=e64] [cursor=pointer]
        - link "Forgotten password?" [ref=e71] [cursor=pointer]:
          - /url: /recover/initiate/?privacy_mutation_token=eyJ0eXBlIjo1LCJjcmVhdGlvbl90aW1lIjoxNzkyNjAwNjQ1fQ%3D%3D&ars=facebook_login
        - link "Create new account" [ref=e77] [cursor=pointer]:
          - /url: /reg/?entry_point=login
        - img "Meta logo" [ref=e82]
  - separator [ref=e90]
  - main [ref=e96]:
    - separator [ref=e98]
    - generic [ref=e103]:
      - generic [ref=e105]:
        - generic [ref=e106]: English (UK)
        - link "தமிழ்" [ref=e110] [cursor=pointer]:
          - /url: "#"
        - link "తెలుగు" [ref=e113] [cursor=pointer]:
          - /url: "#"
        - link "ಕನ್ನಡ" [ref=e116] [cursor=pointer]:
          - /url: "#"
        - link "اردو" [ref=e119] [cursor=pointer]:
          - /url: "#"
        - link "हिन्दी" [ref=e122] [cursor=pointer]:
          - /url: "#"
        - link "മലയാളം" [ref=e125] [cursor=pointer]:
          - /url: "#"
        - link "More languages…" [ref=e128] [cursor=pointer]:
          - /url: "#"
      - generic [ref=e131]:
        - link "Sign up" [ref=e134] [cursor=pointer]:
          - /url: https://www.facebook.com/reg/
        - link "Log in" [ref=e137] [cursor=pointer]:
          - /url: https://www.facebook.com/login/
        - link "Messenger" [ref=e140] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmessenger.com%2F&h=AUCaRcGFp743hTd4uPN1VFQlXmrF_XtEff1A1IZrdr5-5kkuppKFLHflgWuK4zaeruNdl8W6bGAsRvF5u8Ao3QHr3xl7LNtIbAm0rHcw4EiYbZdt-y36QxH4qhZaH37Aa0zg-cxyoIgypPmt_9DsmY4ee7BBgm7H7RY29w
        - link "Facebook Lite" [ref=e143] [cursor=pointer]:
          - /url: https://www.facebook.com/lite/
        - link "Video" [ref=e146] [cursor=pointer]:
          - /url: https://www.facebook.com/watch/
        - link "Meta Pay" [ref=e149] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fabout.meta.com%2Ftechnologies%2Fmeta-pay&h=AUCaRcGFp743hTd4uPN1VFQlXmrF_XtEff1A1IZrdr5-5kkuppKFLHflgWuK4zaeruNdl8W6bGAsRvF5u8Ao3QHr3xl7LNtIbAm0rHcw4EiYbZdt-y36QxH4qhZaH37Aa0zg-cxyoIgypPmt_9DsmY4ee7BBgm7H7RY29w
        - link "Meta Store" [ref=e152] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2F&h=AUCaRcGFp743hTd4uPN1VFQlXmrF_XtEff1A1IZrdr5-5kkuppKFLHflgWuK4zaeruNdl8W6bGAsRvF5u8Ao3QHr3xl7LNtIbAm0rHcw4EiYbZdt-y36QxH4qhZaH37Aa0zg-cxyoIgypPmt_9DsmY4ee7BBgm7H7RY29w
        - link "Meta Quest" [ref=e155] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fquest%2F&h=AUCaRcGFp743hTd4uPN1VFQlXmrF_XtEff1A1IZrdr5-5kkuppKFLHflgWuK4zaeruNdl8W6bGAsRvF5u8Ao3QHr3xl7LNtIbAm0rHcw4EiYbZdt-y36QxH4qhZaH37Aa0zg-cxyoIgypPmt_9DsmY4ee7BBgm7H7RY29w
        - link "Ray-Ban Meta" [ref=e158] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fai-glasses%2Fray-ban-meta%2F&h=AUCaRcGFp743hTd4uPN1VFQlXmrF_XtEff1A1IZrdr5-5kkuppKFLHflgWuK4zaeruNdl8W6bGAsRvF5u8Ao3QHr3xl7LNtIbAm0rHcw4EiYbZdt-y36QxH4qhZaH37Aa0zg-cxyoIgypPmt_9DsmY4ee7BBgm7H7RY29w
        - link "Meta AI" [ref=e161] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.ai%2F&h=AUCaRcGFp743hTd4uPN1VFQlXmrF_XtEff1A1IZrdr5-5kkuppKFLHflgWuK4zaeruNdl8W6bGAsRvF5u8Ao3QHr3xl7LNtIbAm0rHcw4EiYbZdt-y36QxH4qhZaH37Aa0zg-cxyoIgypPmt_9DsmY4ee7BBgm7H7RY29w
        - link "Muse" [ref=e164] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmuse.ai%2F&h=AUCaRcGFp743hTd4uPN1VFQlXmrF_XtEff1A1IZrdr5-5kkuppKFLHflgWuK4zaeruNdl8W6bGAsRvF5u8Ao3QHr3xl7LNtIbAm0rHcw4EiYbZdt-y36QxH4qhZaH37Aa0zg-cxyoIgypPmt_9DsmY4ee7BBgm7H7RY29w
        - link "Instagram" [ref=e167] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AUCaRcGFp743hTd4uPN1VFQlXmrF_XtEff1A1IZrdr5-5kkuppKFLHflgWuK4zaeruNdl8W6bGAsRvF5u8Ao3QHr3xl7LNtIbAm0rHcw4EiYbZdt-y36QxH4qhZaH37Aa0zg-cxyoIgypPmt_9DsmY4ee7BBgm7H7RY29w
        - link "Threads" [ref=e170] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.threads.com%2F&h=AUCaRcGFp743hTd4uPN1VFQlXmrF_XtEff1A1IZrdr5-5kkuppKFLHflgWuK4zaeruNdl8W6bGAsRvF5u8Ao3QHr3xl7LNtIbAm0rHcw4EiYbZdt-y36QxH4qhZaH37Aa0zg-cxyoIgypPmt_9DsmY4ee7BBgm7H7RY29w
        - link "Privacy Policy" [ref=e173] [cursor=pointer]:
          - /url: https://www.facebook.com/privacy/policy/?entry_point=facebook_page_footer
        - link "Privacy Centre" [ref=e176] [cursor=pointer]:
          - /url: https://www.facebook.com/privacy/center/?entry_point=facebook_page_footer
        - link "About" [ref=e179] [cursor=pointer]:
          - /url: https://www.facebook.com/about/
        - link "Create ad" [ref=e182] [cursor=pointer]:
          - /url: https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto
        - link "Create Page" [ref=e185] [cursor=pointer]:
          - /url: https://www.facebook.com/pages/create/?ref_type=site_footer
        - link "Developers" [ref=e188] [cursor=pointer]:
          - /url: https://developers.facebook.com/?ref=pf
        - link "Careers" [ref=e191] [cursor=pointer]:
          - /url: https://www.facebook.com/careers/?ref=pf
        - link "Cookies" [ref=e194] [cursor=pointer]:
          - /url: https://www.facebook.com/policies/cookies/
        - link "AdChoices" [ref=e197] [cursor=pointer]:
          - /url: https://www.facebook.com/help/568137493302217
        - link "Terms" [ref=e200] [cursor=pointer]:
          - /url: https://www.facebook.com/policies?ref=pf
        - link "Help" [ref=e203] [cursor=pointer]:
          - /url: https://www.facebook.com/help/?ref=pf
        - link "Contact uploading and non-users" [ref=e206] [cursor=pointer]:
          - /url: https://www.facebook.com/help/637205020878504
```

# Test source

```ts
  1  | import{test,expect} from'@playwright/test'
  2  | test("login",async({page})=>{
  3  |     await page.goto("https://www.facebook.com/")
  4  |     await page.locator("#_R_1h6kqsqppb6amH1_").fill("example123@gmail.com")
  5  |     await page.locator('[type="password"]').fill("password123")
  6  |     await page.locator('[aria-label="Log in"]').click()
  7  |     await page.waitForTimeout(5000)
  8  |     await page.pause()
  9  | })
  10 | 
  11 | 
  12 | test.only("login using xpath",async({page})=>{
> 13 |     await page.goto("https://www.facebook.com/");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  14 |     await page.locator('//input[@name="email"]').fill("example123@gmail.com");
  15 |     await page.locator('//input[@type="password"]').fill("password123");
  16 |     await page.locator('//div[@aria-label="Log in"]').click();
  17 |     await page.pause()
  18 | });
```
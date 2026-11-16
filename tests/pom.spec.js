import { test, expect } from '@playwright/test';
import Orange from './pages/orangeHrm';
const cred = require('/test-data/ohrm.json');

test("login in Orangehrm", async ({ page }) => {
    const hrm = new Orange(page);

    await hrm.navigation();
    await hrm.login(cred.user, cred.pass);

    //await page.pause();
});


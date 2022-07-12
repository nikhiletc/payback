import { test, expect } from '@playwright/test';
import { SignUp } from './signup/register';

test('basic test', async ({ page }) => {
  // await page.goto('https://playwright.dev/');
  await SignUp.
  const title = page.locator(attribute.nav);
  await expect(title).toHaveText('Playwright');
});

const attribute = {
  nav: '.navbar__inner .navbar__title'
};

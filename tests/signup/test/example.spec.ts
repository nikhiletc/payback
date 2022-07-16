import { test } from '@playwright/test';
import { SignUp } from '@signup-lib/register';

test('create new registration', async ({ page }) => {
  const signup = new SignUp(page);
  await signup.visitPaybackRegistrationPage();
  await signup.selectNewCardVariant();
  await signup.selectCardType('atBPWelcome');
  await signup.waiter();
});

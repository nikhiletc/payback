import type { Page } from 'playwright';
import { faker } from '@faker-js/faker';
import { expect } from '@playwright/test';

export const registrationSelector = {
  cardNumber: 'input[id="cardnumber"]',
  cvvNumber: '[id="cvc"]',
  newCardVariant: 'label.pb-radio__label',
  acceptCookies: '[id="onetrust-accept-btn-handler"]',
  signUpButton:
    '[class="row pb-sign-up-block-container"] [class="pb-sign-up__button-text"]',
  signUpEmail: '[id="email"]',
  password: '[type="password"]',
  errorMsg: '[class*="pb-form-field__error-msg_hidden"]'
};

export class SignUp {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async acceptCookies() {
    await this.page.locator(registrationSelector.acceptCookies).click();
  }

  async visitPaybackRegistrationPage() {
    await this.page.goto('/anmelden');
    await expect(this.page).toHaveURL(/.*anmelden/);
    await this.acceptCookies();
  }

  async setCardNumber(cardNumber: string) {
    await this.page.fill(registrationSelector.cardNumber, cardNumber);
  }

  async setCvvNumber(cvvNumber: string) {
    await this.page.fill(registrationSelector.cvvNumber, cvvNumber);
  }

  async selectNewCardVariant() {
    await this.page.locator(registrationSelector.newCardVariant).last().click();
  }

  async selectCardType(cardType: string) {
    await this.page.locator(`[data-id="${cardType}"]`).first();
  }
  
  async waiter() {
    await this.page.locator(registrationSelector.signUpButton).first().click();
  }

  async setSignUpEmail() {
    const randomEmail = faker.internet.email();
    await this.page.fill(registrationSelector.signUpEmail, randomEmail);
    //!validate email error does not appear
    await expect(registrationSelector.errorMsg).toHaveLength(0);
  }

  async setPassword() {
    await this.page.fill(registrationSelector.signUpEmail, '1234');
    //!validate password error does not appear
    await expect(registrationSelector.errorMsg).toHaveLength(0);
  }
}

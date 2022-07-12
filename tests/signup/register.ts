import { expect, Locator, Page } from '@playwright/test';
export class SignUp {

    readonly url = 'https://playwright'
    readonly page: Page;


    async visitRegistrationPage() {
    await this.page.goto(this.url)
}
    
}

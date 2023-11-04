import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { BASE_URL } from './config';


export class SignupOrLoginPage extends BasePage {
  readonly signupOrLoginLink: Locator;
  readonly pageHeader: Locator;
  readonly signupEmailInput: Locator;
  readonly signupNameInput: Locator;
  readonly signupButton: Locator;

  constructor(page: Page) {
    super(page, `${BASE_URL}/login`)
    this.pageHeader = page.getByText("New User Signup!")
    this.signupEmailInput = page.locator('form:has-text("Signup") input[placeholder="Email Address"]')
    this.signupNameInput = page.locator('form:has-text("Signup") input[placeholder="Name"]')
    this.signupButton = page.getByRole("button", { name: /Signup/i })
  }
}
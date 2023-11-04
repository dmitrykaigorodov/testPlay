import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { BASE_URL } from './config';

export class HomePage extends BasePage {
  readonly page: Page;
  readonly signupOrLoginLink: Locator;

  constructor(page: Page) {
    super(page, `${BASE_URL}`)
    this.page = page;
    this.signupOrLoginLink = page.getByRole("link", { name: "Signup / Login" })
  }
}
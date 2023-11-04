import { type Page } from '@playwright/test';
export class BasePage {
  readonly url;

  readonly page: Page;

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = url
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async mount() {
    if (this.page.url() !== this.url) {
      throw new Error('Could not mount login page: ' + this.page.url())
    }
  }

}
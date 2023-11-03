import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.automationexercise.com/');
  }

  async clickButtonWithId(id: string) {
    await this.page.click(`#${id}`);
  }
}

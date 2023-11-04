import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { BASE_URL } from './config';


export class CreateAccountSignupPage extends BasePage {
  async fillIn(userData: any) {
    const page = this.page
    const password = page.getByLabel("Password");
    //const password = page.getByPlaceholder("Password");
    await password.fill("123");
    const firstName = page.getByLabel("First Name");
    await firstName.fill("pav");
    const lastName = page.getByLabel("Last Name");
    await lastName.fill("rud");
    await page
      .getByLabel("Address * (Street address, P.O. Box, Company name, etc.)")
      .fill("kob 54");
    await page.getByLabel("Country").selectOption("Canada");
    await page.getByLabel("State").fill("maz");
    await page.getByLabel("City ").fill("waw");
    await page.locator("[name='zipcode']").fill("12345");
    await page.getByLabel("Mobile Number").fill("123456789");
  }

  async fillIn1(userData: any) {
    for (const [key, value] of Object.entries(userData)) {
      if (key != 'title' && key != 'email') {
        try {
          await this.page.locator(`[name='${key}']`).fill(value as string, { timeout: 1000 })
        } catch (e) {
          console.error(e)
          await this.page.locator(`[name='${key}']`).selectOption(value as string)
        }
      }
    }
  }

  readonly signupOrLoginLink: Locator;
  readonly pageHeader: Locator;
  readonly createAccountButton: Locator
  readonly acccountCreatedSuccessMessage: Locator

  constructor(page: Page) {
    super(page, `${BASE_URL}/signup`)
    this.signupOrLoginLink = page.getByRole("link", { name: "Signup / Login" })
    this.pageHeader = page.getByText("ENTER ACCOUNT INFORMATION")
    this.createAccountButton = page.getByRole("button", { name: /Create Account/i })
    this.acccountCreatedSuccessMessage = page.getByText("ACCOUNT CREATED!")
  }
}
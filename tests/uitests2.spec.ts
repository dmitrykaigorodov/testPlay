import { expect, test } from "@playwright/test";
import { createUserData } from "../tests-examples/createUserData";
import { CreateAccountSignupPage } from "./pages/CreateAccountSignupPage";
import { HomePage } from "./pages/HomePage";
import { SignupOrLoginPage } from "./pages/SignupOrLoginPage";

test("new user sign up ", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.signupOrLoginLink.click()


  const loginPage = new SignupOrLoginPage(page)
  await loginPage.mount()

  // await expect(loginPage.signupNameInput).toBeEmpty();
  await loginPage.signupNameInput.fill("Pav");
  await loginPage.signupEmailInput.fill(`eee+test-${Date.now()}@mail.com`);
  await loginPage.signupButton.click();

  const createAccountSignupPage = new CreateAccountSignupPage(page)
  await createAccountSignupPage.mount()
  await expect(createAccountSignupPage.pageHeader).toBeVisible();

  const userData = createUserData()
  await createAccountSignupPage.fillIn(userData)
  await createAccountSignupPage.createAccountButton.click();
  await expect(createAccountSignupPage.acccountCreatedSuccessMessage).toBeVisible();
});


test("login user negative", async ({ page }) => {

  await page.getByRole("link", { name: "Signup / Login" }).click();

  await expect(page.getByText("Login to your account")).toBeVisible();

  const emailLogin = page.locator(
    'form:has-text("Login") input[placeholder="Email Address"]'
  );

  await expect(emailLogin).toBeEmpty;
  await emailLogin.fill("pav@mail.com");
  const password = page.getByPlaceholder("Password");
  await expect(password).toBeEmpty;
  await password.fill("123");
  await page.getByRole("button", { name: /Login/i }).click();

  await expect(
    page.getByText("Your email or password is incorrect!")
  ).toBeVisible();
});


test("login user positive", async ({ page }) => {
  await page.goto("https://www.automationexercise.com");

  await page.getByRole("link", { name: "Signup / Login" }).click();

  await expect(page.getByText("Login to your account")).toBeVisible();

  const emailLogin = page.locator(
    'form:has-text("Login") input[placeholder="Email Address"]'
  );
  const passwordLogin = page.locator(
    'form:has-text("Login") input[placeholder="Password"]'
  );

  await expect(emailLogin).toBeEmpty;
  await emailLogin.fill("eee@mail.com");
  await expect(passwordLogin).toBeEmpty;
  await passwordLogin.fill("123");
  await page.getByRole("button", { name: /Login/i }).click();
});


test("add to card ", async ({ page }) => {

  await page.evaluate(() => {
    const elementToRemove = document.getElementById("ad_position_box");
    if (elementToRemove) {
      elementToRemove.remove();
    }
  });

  await page.getByRole("link", { name: "Products" }).click();
  await page.evaluate(() => {
    const elementToRemove = document.querySelector(".adsbygoogle");
    if (elementToRemove) {
      elementToRemove.remove();
    }
  });

  await expect(page.getByText("All product")).toBeVisible();
  const search = page.getByPlaceholder("Search");
  await expect(search).toBeEmpty;
  await search.fill("blue");
  await page.click("#submit_search");

  const addToCartLinks = await page.locator('.productinfo .add-to-cart').all();
  for (const link of addToCartLinks) {
    await link.click();
    await page.getByRole("button", { name: /Continue Shopping/i }).click();
  }

  await page.getByRole("link", { name: "Cart" }).click();
});


test("product color is blue ", async ({ page }) => {
  const cartProductList = page.getByTitle("Cart");
  await expect(cartProductList).toHaveText("Blue");
});




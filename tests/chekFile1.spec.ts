import { expect, test } from "@playwright/test";

test("Create/Register User Account via API", async ({ page }) => {
  const postfix = Math.round(Math.random() * 10000)
  const apiURL = "https://automationexercise.com/api/createAccount";
  const userData = {
    name: "Dmitry",
    email: `eee${postfix}@example.com`,
    password: "P123",
    title: "Mr",
    birth_date: "01",
    birth_month: "January",
    birth_year: "1999",
    firstname: "Paw",
    lastname: "Rud",
    company: "Company",
    address1: "54/58 Street St",
    address2: "Apt 30",
    country: "Poland",
    zipcode: "12345",
    state: "Mazovian",
    city: "Warsaw",
    mobile_number: "123" + postfix,
  };

  const response = await page.request.post(apiURL, {
    form: userData,

  });

  const body = await response.json();

  console.log(body);

  expect(body.responseCode).toBeLessThan(400);
  expect(body.message).toContain("User created!");
});

test("Verify Login with Valid Details via API", async ({ page }) => {
  const apiURL = "https://automationexercise.com/api/verifyLogin";
  const loginData = {
    email: "eee@mail.com",
    password: "P123",
  };

  const response = await page.request.post(apiURL, {
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(loginData),
  });
  console.log("Response Status Code:", response.status());
  console.log("Response Body:", await response.text());

  const statusCode = response.status();
  const responseBody = await response.text();

  expect(statusCode).toBe(200);
  expect(responseBody).toContain("User exists!");
});

test("Verify Login with Invalid Details via API", async ({ page }) => {
  const apiURL = "https://automationexercise.com/api/verifyLogin";
  const invalidLoginData = {
    email: "invalid_email@example.com",
    password: "invalidPassword",
  };

  const response = await page.request.post(apiURL, {
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(invalidLoginData),
  });

  const statusCode = response.status();
  const responseBody = await response.text();


  expect(statusCode).toBe(404);

  expect(responseBody).toContain("Your email or password is incorrect!");

});

test("Search Product via API", async ({ page }) => {
  const apiURL = "https://automationexercise.com/api/searchProduct";
  const searchTerms = ["Blue", "Yellow"];

  for (const searchTerm of searchTerms) {
    const searchData = {
      search_product: searchTerm,
    };

    const response = await page.request.post(apiURL, {
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(searchData),
    });

    const statusCode = response.status();
    const responseBody = await response.json();



    expect(statusCode).toBe(200);

    if (searchTerm === "Blue") {
      const blueProducts = responseBody["Searched products list"];
      expect(blueProducts).toContain("Blue Product 1");
      expect(blueProducts).toContain("Blue Product 2");
    } else if (searchTerm === "Yellow") {
      expect(responseBody).toHaveProperty("error");
    }
  }
});

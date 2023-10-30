import { test, expect } from '@playwright/test';
import fetch from 'node-fetch';

test('has title', async ({ page }) => {
  await page.goto('https://www.automationexercise.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation/);
});


test('API Test', async ({ page }) => {
  const response = await page.goto('https://www.automationexercise.com/api/createAccount');

  // Perform assertions on the response status code and content
  expect(response.status()).toBe(200);
  expect(await response.text()).toContain('Expected Text in API Response');
});


test('Send POST Request', async () => {
  const url = 'https://api.example.com/postEndpoint';
  const data = {
    key1: 'value1',
    key2: 'value2',
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  // Perform assertions on the response
  expect(response.status).toBe(200); // Change the expected status code as needed

  const responseBody = await response.json();
  expect(responseBody).toEqual({ success: true }); // Change the expected response data
});
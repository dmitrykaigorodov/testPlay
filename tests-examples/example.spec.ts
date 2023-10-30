import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/automation/);
  });
  test('get started link', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Products' }).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*products/);
  });
  
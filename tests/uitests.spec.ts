import { test, expect,type Page } from '@playwright/test';
import {user} from '../tests-examples/datatest.json';
import {product} from '../tests-examples/productList.json'
import { execPath } from 'process';
// import exp from 'constants';
// test('has title', async ({ page }) => {
//     await page.goto('https://www.automationexercise.com');
  
//     await expect(page).toHaveTitle(/Automation/);
//   });
  

//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://www.automationexercise.com');
  
//   });

//   test('get started link', async ({ page }) => {
//     await page.goto('https://www.automationexercise.com');
  
//     // Click the get started link.
//     await page.getByRole('link', { name: 'Video Tutorials' }).click();
  
//     // Expects the URL to contain intro.
//     await expect(page).toHaveURL(/.*AutomationExercise/);
//   });

//   test.describe('tests UI', () => {
//     test('register user', async ({ page }) => {

//      // await page.goto('https://www.automationexercise.com');
//       //await expect(page.getByText('Full-Fledged practice website for Automation Engineers')).toBeVisible();
//       await  page.getByRole('heading', { name: 'Full-Fledged practice website for Automation Engineers' }).isVisible
//       await page.getByRole('link', { name: 'Singup/Login' }).click();
//      // await expect (page).toHaveTitle('Login')
      
            
              
//     });
    test ('new user sign up ',async({page}) =>{

//       //const user = JSON.stringify()
await page.goto('https://www.automationexercise.com');
await page.getByRole('link', { name: 'Signup / Login' }).click()
       await expect(page.getByText('New User Signup!')).toBeVisible();
       const name = page.getByPlaceholder('Name');
       
       const emailSignUp = page.locator('form:has-text("Signup") input[placeholder="Email Address"]');

       
       await expect(name).toBeEmpty
       await expect(emailSignUp).toBeEmpty
       await name.fill('Pav')
       await emailSignUp.fill('eee@mail.com')
       await page.getByRole('button', { 'name': /Signup/i }).click();
       
       await expect(page).toHaveURL(/.*signup/)
       await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();
      } );
     test('login user', async ({ page }) => {

      
      await page.goto('https://www.automationexercise.com');
      
      await page.getByRole('link', { name: 'Signup / Login' }).click()

      await expect(page.getByText('Login to your account')).toBeVisible();
      
     
     const emailLogin = page.locator('form:has-text("Signup") input[placeholder="Email Address"]');

      await expect (emailLogin).toBeEmpty      
      await emailLogin.fill('pav@mail.com');

      const password = page.getByPlaceholder('Password')
      await expect (password).toBeEmpty 
      await password.fill('123')
      await page.getByRole('button', { 'name': /Login/i }).click();
      await expect(page).toHaveURL(/.*login/)
          });

      

          test('login user positive', async ({ page }) => {

      
            await page.goto('https://www.automationexercise.com');
            
            await page.getByRole('link', { name: 'Signup / Login' }).click()
      
            await expect(page.getByText('Login to your account')).toBeVisible();
            
           // const emailLogin = page.locator('[form].filter({ hasText: "Signup" }).getByPlaceholder("Email Address")');
           const emailLogin = page.locator('form:has-text("Signup") input[placeholder="Email Address"]');
      
            await expect (emailLogin).toBeEmpty      
            await emailLogin.fill('eee@mail.com');
      
            const password = page.getByPlaceholder('Password')
            await expect (password).toBeEmpty 
            await password.fill('123')
            await page.getByRole('button', { 'name': /Login/i }).click();
            await expect(page).toHaveURL(/.*login/)
                });
          







  
    test('add to card ', async ({ page }) => {
      await page.goto('https://www.automationexercise.com');
  
      
      await page.getByRole('link', { name: 'Products' }).click()

      const popupBanner = await page.$('.popup-banner');
      if (popupBanner) {

        const closeButton = await popupBanner.$('.dismiss-button');
        if (closeButton) {
          await closeButton.click();
        }
    
        
        await page.waitForSelector('.popup-banner', { state: 'hidden' });
      }
      //document.querySelector("#rectangle-album > div")
      // #rectangle-album > div
      //#card
      ////*[@id="card"]
      await expect(page.getByText('All product')).toBeVisible();
     const search = page.getByPlaceholder ('Search')
     await expect (search).toBeEmpty
     await search.fill('blue')
        // await page.getByRole('button',{ name: 'submit_search' }).click    
   })
  // await  (page).click('#submit_search')
      
      
    test('product color is blue ',async ({page}) => {

      const cartProductList  = page.getByTitle('Cart');
await expect (cartProductList).toHaveText ('Blue') 
        
    })
  
  //})
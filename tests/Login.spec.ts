import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test('Open page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.login();
  await loginPage.acceptAllCookies();
  await loginPage.navigateToLoginScreen();
  await loginPage.submitLoginWithParameters(loginPage.username, loginPage.password);
})


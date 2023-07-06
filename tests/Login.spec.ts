import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test('Login into test page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();
})


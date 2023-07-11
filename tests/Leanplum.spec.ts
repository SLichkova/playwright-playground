import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { CampaignPage } from '../page-objects/CampaignPage';

let loginPage; let campaignPage;

test.beforeEach(async ({page}) => {
  console.log('Before tests');
  loginPage = new LoginPage(page);
  campaignPage = new CampaignPage(page);
});

test('Login into Leanplum', async ({page}) => {
  
  await loginPage.login();
  await loginPage.acceptAllCookies();
  await loginPage.navigateToLoginScreen();
  await loginPage.submitLoginWithParameters(loginPage.username, loginPage.password);
  await loginPage.assertUserIsLoggedIn();
})

test ('Create Campaign', async ({page}) => {

  await loginPage.login();
  await loginPage.navigateToLoginScreen();
  await loginPage.submitLoginWithParameters(loginPage.username, loginPage.password);
  await campaignPage.createCampaign();
  await campaignPage.verifyPushNotificationTitleIsPresent();
  await campaignPage.addCampaignName(campaignPage.name);
  await campaignPage.submitCreateCampaign();
  await campaignPage.addPushMessage(campaignPage.message);
  await campaignPage.selectIndicatorDelivery();
  await campaignPage.selectDeliveryOption();
  await campaignPage.selectEndFinishAfter();
  await campaignPage.afterOccurrence();
  await campaignPage.publishStartCampaign();

})
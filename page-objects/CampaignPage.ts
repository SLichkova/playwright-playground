import { Page } from "playwright-core";
import { BasePage } from "./BasePage";
import { pages } from "../selectors/selectors";

export class CampaignPage extends BasePage {
  static pageObjectModel: any;
  static goto() {
    throw new Error('Method not implemented.');
  }
  
  public url: string = "";
  public name: string = "TestCreateFirstCampaign";
  public message: string = "eBay - Get our BlackFriday deals up to 70% down!";

  private campaignSelectors;

  constructor (page: Page) {
    super(page);
    this.campaignSelectors = pages.campaigns;
  }

  public async createCampaign() {
    await this.page.locator(`css=${this.campaignSelectors.createCampaignMainPage}`).click();
  }

  public async addCampaignName(name: string){
    await this.page.locator(`css=${this.campaignSelectors.campaignName}`).click();
    await this.page.locator(`css=${this.campaignSelectors.campaignName}`).fill(name)
  }

  public async submitCreateCampaign(){
    await this.page.locator(`css=${this.campaignSelectors.createCampaignSubmitButton}`).click();
  }

  public async cancelCampaignButton(){
    await this.page.locator(`css=${this.campaignSelectors.cancelButton}`).click();
  }

  public async verifyPushNotificationTitleIsPresent(message: string){
    await this.page.locator(`css=${this.campaignSelectors.pushNotificationTitle}`).textContent();
  }

  public async addPushMessage(message: string){
    await this.page.locator(`css=${this.campaignSelectors.addPushMessage}`).click();
    await this.page.locator(`css=${this.campaignSelectors.addPushMessage}`).fill(message);
  }


  public async selectIndicatorDelivery(){
    await this.page.locator(`css=${this.campaignSelectors.labelDelivery}`).click();
  }

  public async selectDeliveryOption(){
    await this.page.locator(`css=${this.campaignSelectors.sectionDelivery}`).scrollIntoViewIfNeeded();

    await this.page.hover(`css=${this.campaignSelectors.optionsItemRecurring}`);
    await this.page.locator(`css=${this.campaignSelectors.optionsItemRecurring}`).click();

    await this.page.locator(`css=${this.campaignSelectors.scheduleViewEndLabel}`).isVisible();
  }

  public async selectEndFinishAfter(){
    await this.page.locator(`css=${this.campaignSelectors.optionalFinishAfter}`).click();
  }

  public async afterOccurrence(){
    await this.page.locator(`css=${this.campaignSelectors.occurrences}`).clear();
    await this.page.locator(`css=${this.campaignSelectors.occurrences}`).inputValue();
  }

  public async publishStartCampaign() {
    await this.page.locator(`css=${this.campaignSelectors.buttonReviewAndPublish}`).click();
    await this.page.locator(`css=${this.campaignSelectors.buttonPublish}`).click();
  }

}

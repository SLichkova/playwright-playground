import { Page } from "playwright-core";

export class BasePage {
  protected page: Page;

  constructor (p: Page) {
    this.page = p;
  }

  public async navigateTo(pageUrl: string) {
    await this.page.goto(pageUrl);
  }
}
import { Page } from "playwright-core";
import { BasePage } from "./BasePage";
import { pages } from "../selectors/selectors";

export class LoginPage extends BasePage {
  public url: string = "https://www.leanplum.com/";
  private loginSelectors;

  constructor (page: Page) {
    super(page);
    this.loginSelectors = pages.login;
  }

  public async login(): Promise<void> {
    await this.navigateTo(this.url);
  }
}

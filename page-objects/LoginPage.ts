import { Page } from "playwright-core";
import { BasePage } from "./BasePage";
import { pages } from "../selectors/selectors";

export class LoginPage extends BasePage {
  static pageObjectModel: any;
  static goto() {
    throw new Error('Method not implemented.');
  }
  public url: string = "https://www.leanplum.com/";
  public username: string = "slichkova@yahoo.com";
  public password: string = "Qwerty27@S";
  private loginSelectors;

  constructor (page: Page) {
    super(page);
    this.loginSelectors = pages.login;
  }

  public async login(): Promise<void> {
    await this.navigateTo(this.url);
  }

  public async acceptAllCookies() {
    await this.page.locator(`css=${this.loginSelectors.acceptAllCookies}`).click();
  }

  public async navigateToLoginScreen() {
    await this.page.locator(`css=${this.loginSelectors.loginButton}`).click()
  }

  public async submitLoginWithParameters( username: string, password: string) {
   await this.page.locator(`css=${this.loginSelectors.usernameInput}`).click();
   await this.page.locator(`css=${this.loginSelectors.usernameInput}`).fill(username);

   await this.page.locator(`css=${this.loginSelectors.passwordInput}`).click();
   await this.page.locator(`css=${this.loginSelectors.passwordInput}`).fill(password);

   await this.page.locator(`css=${this.loginSelectors.submitButton}`).click();
  }

  public async assertUserIsLoggedIn() {
    await this.page.locator(`css=${this.loginSelectors.pageTitleAfterLogin}`).textContent();
  }

}

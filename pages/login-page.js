import { Selector, t } from 'testcafe';

export class LoginPage {
    constructor () {
        this.usernameField = Selector('[data-test="username"]');
        this.passwordField = Selector('[data-test="password"]');
        this.loginButton = Selector('[data-test="login-button"]');
        this.errorMessage = Selector('[data-test="error"]');
    }

    async open(baseUrl){
        await t.navigateTo(baseUrl);
    }

    async enterUsername(username){
        await t.typeText(this.usernameField, username);
    }

    async enterPassword(password){
        await t.typeText(this.passwordField, password);
    }

    async clickOnLoginButton(){
        await t.click(this.loginButton);
    }

    async errorMessageIsDisplayed(errorMessage){
        await t.expect(this.errorMessage.visible).ok();
        await t.expect(this.errorMessage.textContent).contains(errorMessage);
    }
}
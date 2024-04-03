import { LoginPage } from "../pages/login-page";
import { HomePage } from "../pages/home-page";
import { test } from 'testcafe';
import { baseUrl, validUsername, validPassword, invalidUsername } from "../data/input-data";
import { lockedOutError } from "../data/expected-data";


fixture('Login')

test('Successful Login', async t => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    await loginPage.open(baseUrl);
    await loginPage.enterUsername(validUsername);
    await loginPage.enterPassword(validPassword);
    await loginPage.clickOnLoginButton();
    await homePage.userIsLoggedIn();
});

test('Locked Out Login', async t => {
    const loginPage = new LoginPage();
    await loginPage.open(baseUrl);
    await loginPage.enterUsername(invalidUsername);
    await loginPage.enterPassword(validPassword);
    await loginPage.clickOnLoginButton();
    await loginPage.errorMessageIsDisplayed(lockedOutError);
});

import { Selector, t } from 'testcafe';

export class HomePage {
    constructor () {
        this.menuButton = Selector('#react-burger-menu-btn');
        this.logoutSidebarLink = Selector('#logout_sidebar_link');
    }

    async userIsLoggedIn(){
        await t.click(this.menuButton);
        await t.expect(this.logoutSidebarLink.visible).ok();
    }
}
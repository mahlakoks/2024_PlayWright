import { Page } from "@playwright/test";

export default class homepage{
 

    constructor(public page:Page){
        
    }

    async clickOnLogin(){
        await this.page.getByRole('button', { name: 'My account' }).hover();
        await this.page.getByRole('link', { name: 'Login' }).click();
    }

    async   clickOnRegister() {
        await this.page.getByRole('button', { name: 'My account' }).hover();
        await this.page.getByRole('link', { name: 'Register' }).click();
    }

    async   clickOnLogout() {
        await this.page.getByRole('button', { name: 'My account' }).hover();
       

        await Promise.all([
            this.page.waitForLoadState(),
            await this.page.getByRole('link', { name: 'Logout' }).click()
        ])
    }

}
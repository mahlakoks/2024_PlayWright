import { Page } from "@playwright/test";
import { Console } from "console";

export default class loginpage{

    constructor(public page:Page){
        
    }

    async login(username:string,password:string){
      
        console.log("********  "+username+"  "+password);
        this.enterLogin(username);
        this.enterpassword(password);
    }

    async enterLogin(username:string){
       
        const _username=await this.page.getByPlaceholder("E-Mail Address");
        console.log(await _username.textContent());
      await _username.fill(username)
    }

    async enterpassword(passsword:string){
        await this.page.locator("//input[@id='input-password']").fill(passsword);

    }


    async clickLogin(){
       await this.page.locator("//input[@value='Login']").click();
    }
    
}
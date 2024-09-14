import { faker } from "@faker-js/faker/locale/af_ZA";
import { expect, Page } from "@playwright/test";
import { enterText } from "../uility/utility";
import { TIMEOUT } from "dns";

export default class registerpage{
//https://ecommerce-playground.lambdatest.io/

constructor(public page:Page){

}



async registerUser() : Promise<{ testemail: string; tespassword: string }>{

   const testname=faker.person.firstName();
   const testemail = faker.internet.email({ firstName: testname });
   const tespassword = faker.internet.password();

   await expect(async()=>{

      const testname=faker.person.firstName();
      this.enterFirstName(testname);
      await this.page.waitForTimeout(2000)
   
      this. enterLastName(faker.person.lastName());
      await this.page.waitForTimeout(2000)
   

      this.enteremail(testemail);
      await this.page.waitForTimeout(2000)
      this.enterTelephone(faker.phone.number());
      await this.page.waitForTimeout(2000)
   
      this.enterpassword(tespassword);
      await this.page.waitForTimeout(1000)
      this.enterconfpass(tespassword);
      await this.page.waitForTimeout(1000)
      this.isSubscribedNo();
     await this.page.waitForTimeout(1000)
      this.checkTC();
    await this.page.waitForTimeout(1000)
      this.entercontinue();
    await this.page.waitForTimeout(1000)
    timeout: 500
   }).toPass()
   

   return { testemail, tespassword };
}

async doRegistration(){
   await page.getByPlaceholder('First Name').click();
   await page.getByPlaceholder('First Name').fill('ass');
   await page.getByPlaceholder('Last Name').click();
   await page.getByPlaceholder('Last Name').fill('aaaadd');
   await page.getByPlaceholder('E-Mail').click();
   await page.getByPlaceholder('E-Mail').fill('add@dddd.com');
   await page.getByPlaceholder('Telephone').click();
   await page.getByPlaceholder('Telephone').fill('01253256632');
   await page.getByPlaceholder('Password', { exact: true }).click();
   await page.getByPlaceholder('Password', { exact: true }).fill('Telkom06');
   await page.getByPlaceholder('Password Confirm').click();
   await page.getByPlaceholder('Password Confirm').fill('telkom06');
   await page.getByText('I have read and agree to the').click();
   await page.getByRole('button', { name: 'Continue' }).click();
}

async enterFirstName(firstname:string){

   await this.page.waitForLoadState("domcontentloaded");
  await this.page.waitForLoadState("networkidle");
  await this.page.getByPlaceholder('First Name')?.fill(firstname);
//   await this.page.waitForSelector('input[name="first_name"]');
//   await enterText(this.page,"//input[@id='input-firstname']",firstname);
}

async enterLastName(lastname:string){
    await this.page.getByPlaceholder('Last Name').fill(lastname);
   // await enterText(this.page,"#input-lastname",lastname);
   }

   async enterTelephone(telephone:string){
    await this.page.getByPlaceholder('Telephone').fill(telephone);
   }

   async enteremail(email:string){
    await this.page.getByPlaceholder('E-Mail').fill(email);
   }

   async enterpassword(password:string){
    await this.page.getByPlaceholder('Password', { exact: true }).fill(password);
   }

   async enterconfpass(cpassword:string){
    await this.page.getByPlaceholder('Password Confirm').fill(cpassword);
   }

   async isSubscribedNo(){
    await this.page.locator("//label[@for='input-newsletter-no']").check();
   return  await this.page.getByText('No', { exact: true }).isChecked();

}


   async checkTC(){
    await this.page.getByText('I have read and agree to the').check();
   }

   async entercontinue(){
    await this.page.getByRole('button', { name: 'Continue' }).click();
   }




}
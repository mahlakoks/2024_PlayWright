import test, { expect } from "@playwright/test";
import homepage from "./pages/homepage"
import registerpage from "./pages/registerPage";
import loginpage from "./pages/loginPage";
import { faker } from '@faker-js/faker';

test("test Login",async({page})=>{
    
    await page.goto("https://ecommerce-playground.lambdatest.io/")

    const hp =new homepage(page);
 

    await hp.clickOnRegister();

    expect(page.url()).toContain("/register");
    const rg =new registerpage(page);
    const { testemail, tespassword }= await rg.registerUser();

    console.log(">>>>>>>> "+ testemail +" "+tespassword)

   /* await page.waitForEvent("load")
    await page.waitForLoadState("networkidle");

    await hp.clickOnLogout();
    await page.waitForEvent("load")
    await page.waitForLoadState("networkidle");


   await hp.clickOnLogin();
    const login=new loginpage(page);

  
    await login.login(testemail,tespassword)
    await page.waitForTimeout(5000);*/

    // const register=new registerpage(page);

    // await register.enterFirstName("Nigel")

    // await page.waitForTimeout(3000);

})



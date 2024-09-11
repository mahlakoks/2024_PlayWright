import { chromium, test } from "@playwright/test";
import { assert } from "console";


test("Login test demo0",async ()=>{

    const browser=await chromium.launch({
        headless : false 
    });
    const contex =await browser.newContext();
    const page = await contex.newPage();//new tab

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("(//a//span[contains(text(),'My account')])[2]")
    await page.click("'Login'");//same as "text=Login"

   await page.fill("//input[@id='input-email']","koushik350@gmail.com");
   await page.fill("//input[@id='input-password']","Pass123$");
   await page.click("//input[@value='Login']");

  // await page.waitForTimeout(5000);

   const contex2 =await browser.newContext();
   const page2 = await contex2.newPage();//new clean  browser
   await page2.goto("https://ecommerce-playground.lambdatest.io/")
   await page.waitForTimeout(5000);
});
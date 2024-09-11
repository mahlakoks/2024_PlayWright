//https://www.lambdatest.com/selenium-playground/simple-form-demo

import test, { expect } from "@playwright/test";
import { assert } from "console";

test("Simple Form test",async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    
    const placeholder= page.locator("//input[@id='user-message']")
    const placetext = await placeholder.getAttribute("placeholder");

    console.log(placetext);

   await expect(placeholder).toHaveAttribute("placeholder","Please enter your Message");
   await placeholder.fill("Invetec Automation")
  
   
   const enterdvalue=await placeholder.inputValue();
   console.log(enterdvalue);
   await page.locator("//button[@id='showInput']").click();

   const results=await page.locator("//p[@id='message']");

   const valueEnterd=await page.locator("//p[@id='message']").innerText();

   console.log(" Vlue below your message \n"+valueEnterd);

   expect(results).toHaveText("Invetec Automation");
   

});

test("Sum",async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")

    const sum1=page.locator("//input[@id='sum1']");
    const sum2=page.locator("//input[@id='sum2']")
    const getSumbtn= page.locator("//button[normalize-space()='Get Sum']");
    const results=page.locator("//p[@id='addmessage']")

   

    await sum1.fill(""+5);
    await sum2.fill(""+6);

    await getSumbtn.click();

    const sum1Value = await sum1.inputValue();
    const sum2Value = await sum2.inputValue();

    // Convert the string values to numbers
    const num1 = Number(sum1Value);
    const num2 = Number(sum2Value);

    const getres = num1 + num2;
    console.log(getres + "<<<<< >>>>>"+await results.textContent());
    const calculatedValue=await results.innerText();
    console.log(calculatedValue + "<<<<< 33 >>>>>"+await results.textContent());
    expect(Number(calculatedValue)).toEqual(getres);

})

test.only("check box interraactions",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")

    const Checkbox1=page.locator("//input[@id='isAgeSelected']")
    const checkmsg=page.locator("#txtAge")

    await Checkbox1.check();

    expect(Checkbox1).toBeChecked();
    expect(checkmsg).toBeVisible()
    console.log(">>>>>" + await checkmsg.innerText()); 
    expect(checkmsg).toHaveText("Checked");


})
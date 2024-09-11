//https://www.lambdatest.com/selenium-playground/select-dropdown-demo

import test from "@playwright/test";

test("Handle dropdown",async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    
    const Pleaseselect=page.locator("//select[@id='select-demo']");

    await page.selectOption("//select[@id='select-demo']",{
        index:3
    })

    await page.selectOption("//select[@id='multi-select']",[
        {label:'India'},
        {value:'Denmark'}]);
   // await page.waitForTimeout(3000)

})
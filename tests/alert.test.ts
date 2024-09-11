//https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo

import test from "@playwright/test";

test("Test alerts",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    const alertbtnelem=page.locator("//button[@type='button']")

    const alert2msg=page.locator("//p[@id='confirm-demo']")

    // page.on("dialog",(alert)=>{
    //     alert.accept();
    // });

    // await alertbtnelem.nth(0).click();

    // page.on("dialog",(alert)=>{
    //     console.log(">>> "+alert.defaultValue)
    //     alert.dismiss();
    // });

    // await alertbtnelem.nth(1).click();

    // console.log(await alert2msg.textContent())

    page.on("dialog",async(alert)=>{
        console.log(">>> "+alert.defaultValue())
        alert.accept("investec automation hggggg")
      
    });


    await alertbtnelem.nth(2).click();
    console.log(await page.locator("//p[@id='prompt-demo']").textContent())
    await page.waitForTimeout(3000);

    // console.log(await alert2msg.textContent())

    // const alertsPromise = page.waitForEvent("dialog")
    // await alertbtnelem.nth(2).click();

    // const alert = await alertsPromise;

    // await alert.accept("investec automation");
    // page.waitForTimeout(10000)
    

})

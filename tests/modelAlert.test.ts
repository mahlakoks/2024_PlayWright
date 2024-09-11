// https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo

import test from "@playwright/test";

test("Boottrap Model Demo",async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    const Launchmodal= page.locator("//button[@data-target='#myModal']")

    await Launchmodal.nth(0).click();

    await page.click("//button[normalize-space()='Save Changes']");


})
//https://letcode.in/frame#google_vignette

import test from "@playwright/test";

test("handle frames",async({page})=>{
    
    await page.goto("https://letcode.in/frame")

    await page.frame("firstFr")?.getByPlaceholder('Enter name').fill('investectest testing');
    await page.waitForTimeout(3000)
    await page.locator('iframe[name="firstFr"]').contentFrame().getByPlaceholder('Enter name').fill('investectest');
    await page.locator('iframe[name="firstFr"]').contentFrame().getByPlaceholder('Enter email').fill('llow');
    await page.locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().getByPlaceholder('Enter email').fill('lastemail');


    const targetframe=page.frameLocator("#firstFr");

    await targetframe.getByPlaceholder("Enter name").fill("Investc test wait")

    const allframes= page.frames();

    await page.waitForTimeout(3000)
})
//  https://www.lambdatest.com/selenium-playground/window-popup-modal-demo

import test from "@playwright/test"

test("windohandle",async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")



   const [multiplepage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("//a[@id='followboth']").click()
   ]
   )

   await page.waitForLoadState();
   const pages= multiplepage.context().pages()

      console.log("await popup.url()"+pages.length);

      pages.forEach(async(currentpage)=>{
        console.log("Current window >>> "+currentpage.url());
        if(currentpage.url().includes("facebook")){
          console.log("Face book page found");
          await currentpage.getByRole('textbox', { name: 'Email address or phone number' }).fill("testFaceook testing");
     
        }
     
       
      })

      await page.waitForTimeout(3000)

})


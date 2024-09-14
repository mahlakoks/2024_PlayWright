import { Page } from "@playwright/test";


export async function enterText(page: Page, locator: string, text: string): Promise<void> {
    const testelement=await page.locator(locator)
    await testelement.waitFor({"timeout":2000})
    await testelement?.fill(text);
  }
  
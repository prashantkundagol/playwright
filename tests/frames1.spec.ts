import {test,expect} from '@playwright/test'

test('handling frames',async({page})=>{
    await page.goto('https://docs.oracle.com/javase/8/docs/api/')

    // await iframe.locator("//a[text()='java.applet']").click();
    const iframe=page.frameLocator('frame[name="packageListFrame"]')
    
    await iframe.locator("//a[text()='java.applet']").click();
   
    // await page.pause()
    await page.waitForTimeout(5000)
    
})
import {test,expect,Page, chromium} from '@playwright/test'
//browser --> context--> pages

//browser --> chromium,firebox,webkit 
//contexts --> we can multiple contexts for multiple users/apps for the same broswer
              // provide a way to opertate multiple independent browser sessions

//page --> Tab,window,popup 
test('Browser context demo',async ({})=>{
    const browser =await chromium.launch();  //create broswer 
    const context =await browser.newContext(); //create context 

    //creating 2 pages    
    const page1=await context.newPage();
    const page2=await context.newPage();

    console.log("No of pages created:",context.pages().length)

    await page1.goto("https://playwright.dev/")
    await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
    
    await page2.goto("https://www.selenium.dev/")
    await expect(page2).toHaveTitle("Selenium")

    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);
})
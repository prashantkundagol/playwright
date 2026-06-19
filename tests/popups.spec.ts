import {test,expect,chromium} from '@playwright/test'

test('handle popups',async({browser})=>{

    const context=await browser.newContext();
    const page= await context.newPage(); 

    await page.goto("https://testautomationpractice.blogspot.com/");

    //multiple popups
    // page.waitForEvent('popup');
    // await page.locator('#PopUp').click();

    await Promise.all([page.waitForEvent('popup'),await page.locator('#PopUp').click()])  
    //Synchronize: Execute the trigger and the event listener simultaneously 

    const allPopupsWindows=context.pages();
    console.log("Number of pages/windows",allPopupsWindows.length);

    console.log(allPopupsWindows[0].url());//return  url of main page/parent
    console.log(allPopupsWindows[1].url())
    // console.log(allPopupsWindows[2].url())

    for(const pw of allPopupsWindows){
        const title=await pw.title();
        if (title.includes('Playwright')){
            await pw.locator('.getStarted_Sjon').click();
            //perform any other actions....
            await pw.close(); // This is close playwright popup window
        }
    }
    
    await page.waitForTimeout(5000)
    

})
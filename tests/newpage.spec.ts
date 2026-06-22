import {test,expect} from '@playwright/test';

test('practicepopup',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    const [popupwindow]=await Promise.all([page.waitForEvent('popup') ,await page.locator('#PopUp').click()])

    console.log(await popupwindow.title());

    

    /*
    page.on('dialog',async (dialog)=>{
        console.log(`Alert message:${dialog.message()}`)
        expect(dialog.message()).toBe('I am an alert box!')
        await dialog.accept()
    })
    await page.locator('#alertBtn').click();
        */   // javascript 
  


})

test.only('popups',async({browser})=>{
    const context=await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    await Promise.all([page.waitForEvent('popup'),await page.locator('#PopUp').click()]);

    const allPopupsWindows=context.pages();
    console.log("Number of pages/windows",allPopupsWindows.length);

    console.log(allPopupsWindows[0].url())
    console.log(allPopupsWindows[1].url())

    for(const pw of allPopupsWindows){
        const title=await pw.title();
        if(title.includes('Playwright')){
            await pw.locator('.getStarted_Sjon').click();
            await pw.close()
        }
    }
})


import {test,expect} from '@playwright/test'


test('alerts',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    
    // page.on('dialog', async (dialog)=>{
    //     console.log(dialog.message());
    //     // await dialog.accept()
    //     await dialog.dismiss()
    // })
    // await page.getByRole('button',{name:'Confirmation Alert'}).click();
    
    page.on('dialog', async (dialog)=>{
        console.log(dialog.message());
        // await dialog.accept('prashant')
        if (dialog.type() === 'prompt') {
    await dialog.accept('Playwright Test');
  }
    })
    await page.locator('#promptBtn').click();
})
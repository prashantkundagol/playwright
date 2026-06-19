import {test,expect,Locator} from '@playwright/test'


test('screenshots demo',async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/')

    const timestamps=Date.now();
    //page screenshot
    // await page.screenshot({path:'screenshots/'+'homepage'+timestamps+'.png'})

    //full page screenshot
    // await page.screenshot({path:'screenshots/'+'fullpage'+timestamps+'.png',fullPage:true})


    //element screenhot 
    // const logo=page.locator('img[alt="Tricentis Demo Web Shop"]')
    // logo.screenshot({path:'screenshots/'+'logo'+timestamps+'.png'})

    // await page.locator('img[alt="Tricentis Demo Web Shop"]').screenshot({path:'screenshots/'+'logo'+timestamps+'.png'})

    await page.locator('.product-grid').screenshot({path:'screenshots/'+'featuredroducts'+timestamps+'.png'})
})


test.only('ss',async({page})=>{

    await page.goto('https://www.demoblaze.com/')
    await page.locator('#login2').click();
    // await page.getByRole('link',{name: 'Log in' }).click()
    await page.locator('#loginusername').fill('Prashantk');
    await page.locator('#loginpassword').fill('Pck@123');
    await page.getByRole('button', {name: 'Log in' }).click();
    await expect(page.getByRole('link', {name: 'Log out' })).toBeVisible();
    
    await expect(page.locator('#nameofuser')).toContainText('Welcome Prashantk');
   
    





})
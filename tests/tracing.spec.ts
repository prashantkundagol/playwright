import {test,expect} from '@playwright/test'


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
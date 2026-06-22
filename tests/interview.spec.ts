import {test,expect,Locator} from '@playwright/test';

test('extract links ',async ({page})=>{

    await page.goto('https://www.wikipedia.org/');
    const countlink=page.locator('.other-project a')
    const totalcount =await countlink.count()
    console.log(`number of links ${totalcount}`)

    expect(totalcount).toBeGreaterThanOrEqual(3);
    const thridlink=countlink.nth(2).click()
    
})


import {test,expect,Locator} from '@playwright/test';

test('Multi Test Dropdown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //select option from dropdown (4 ways)
    // await page.locator('#color').selectOption(['Red','Blue']);    //using visible test
    // await page.locator('#color').selectOption(['red', 'blue']);  //using value attributex
    // await page.locator('#color').selectOption([{label:'red'}, {label:'white'}]);  //using label of option
    // await page.locator('#color').selectOption([{index:0}, {index:2}]);  //using index

    

    //Count number of options in dropdown 
    const optioncount:Locator = page.locator('#color option')
    // await expect(optioncount).toHaveCount(7);


    //check existance option in dropdown    
    const optionTexts:string[] = (await optioncount.allTextContents()).map(text => text.trim());      //remove leading and trailing whitespace from each option text
    console.log("Option Texts:", optionTexts);

    //printing options from dropdown
    

    await page.waitForTimeout(5000);

    
})
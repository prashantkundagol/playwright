 import {test,expect,Locator} from '@playwright/test';

test('Test Dropdown', async ({ page }) => {
    page.goto("https://testautomationpractice.blogspot.com/");

    //select option from dropdown (4 ways)

    await page.locator('#country').selectOption('India');    //visible text
    // await page.locator('#country').selectOption({ value: 'uk' });  //value attribute
    // await page.locator('#country').selectOption({index:3});  //index of option
    // await page.locator('#country').selectOption({label:'Australia'});  //label of option    


    //Count number of options in dropdown 

    // const options:Locator = page.locator('#country >option');  //> or space can be used to select child elements
    // await expect(options).toHaveCount(10);
    // await page.waitForTimeout(5000);

    // //check existance option in dropdown 
    // const optionTexts:string[] = (await options.allTextContents()).map(text => text.trim());   //remove leading and trailing whitespace from each option text
    // console.log("Option Texts:", optionTexts);

    // expect(optionTexts).toContain('Japan');


    // //printing all options in dropdown    (print is text format)
    // for(const option of optionTexts){
    //     console.log(option);
    // }   

    
})
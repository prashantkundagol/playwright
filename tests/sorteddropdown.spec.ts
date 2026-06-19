import {test,expect,Locator} from '@playwright/test';

test('verify sorted dropdown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // const options:Locator = page.locator('#animals > option');
    const options:Locator =page.locator('#colors > option');

    const optionTexts:string[] = (await options.allTextContents()).map(Text => Text.trim());

    const originalList:string[] = [ ...optionTexts ];  //create a copy of original list using spread operator
    const sortedList:string[] = [...optionTexts].slice().sort();  //create a copy of original list and sort it

    console.log("Original List:", originalList);
    console.log("Sorted List:", sortedList);    


})
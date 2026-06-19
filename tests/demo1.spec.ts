import {test,expect } from '@playwright/test';


//fixture - global variable :page,browser
test('verify page title',async({page}) => {
await page.goto("https://testautomationpractice.blogspot.com/", { timeout: 60000 });
let title:string =await page.title();
console.log("Title:",title);
await expect(page).toHaveTitle('Automation Testing Practice')

})
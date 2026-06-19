import {test,expect,Locator} from '@playwright/test';

test ('Testing', async ({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");
})
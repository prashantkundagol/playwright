import {test,expect,chromium} from '@playwright/test'

test('handle tabs',async({})=>{

    const browser =await chromium.launch(); //create browser
    const context =await browser.newContext(); // create context

    //creating 1 page
    const parentPage = await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/");

    // 2 statements should be parallely
    // context.waitForEvent('page');  //pending , fulfilled, rejected.
    // parentPage.locator("button:has-text('New Tab')").click();  //opens new tab/new page
    
    const [childPage]=await Promise.all([context.waitForEvent('page'),parentPage.locator("button:has-text('New Tab')").click()]);

    //Approch 1: switch between pages and get titles
    const pages=context.pages();  //pages return an array
    console.log("Number of pages created:",pages.length)

    console.log("Title of the parent pages:",await pages[0].title());
    console.log("Title of the Child page:",await pages[1].title());

    // Approch 2 alternate 
    console.log("Title of the parent page:",await parentPage.title());
    console.log("Title of the child page:",await childPage.title());

    



})
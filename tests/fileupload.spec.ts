// import {test,expect} from '@playwright/test'

// test('uploadfile',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    // await page.locator('input[type="file"]')
    // const filePath = path.join(__dirname, 'fixtures', 'Resume.pdf');

    // // Set up the listener first, then trigger the action that opens the chooser
    // const fileChooserPromise = page.waitForEvent('filechooser');
    // await page.getByRole('button', { name: 'Upload Single File' }).click(); 
    
    // const fileChooser = await fileChooserPromise;
    // await fileChooser.setFiles(); // fileChooser uses .setFiles()

    
// })

import { test, expect } from '@playwright/test';


test('uploadfile', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    // Build a reliable absolute path using Node's path module
    // const filePath = path.join(__dirname, 'fixtures', 'Resume.pdf'); 

    // Directly upload to the input element (best practice)
    await page.locator('input[type="file"]').first().setInputFiles('test-data/demo.txt');
});
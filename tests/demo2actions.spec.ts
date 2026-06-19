import { test, expect, Locator } from "@playwright/test";


// test('Test Input Actions', async ({ page }) => {

//     await page.goto("https://testautomationpractice.blogspot.com/");
    
//     const textBox:Locator = page.locator('#name');      //css selector for text box element with id "name"

//     await expect(textBox).toBeVisible();
//     await expect(textBox).toBeEnabled();

//     const maxLength= await textBox.getAttribute("maxlength"); //Returns the value of the attribute "maxlength" of the textBox element 
//     // console.log("Max Length:", maxLength);

//     await textBox.fill("Playwright Testing");
//     // await expect(textBox).toHaveValue("Playwright Testing");

//     await expect(maxLength).toBe("15");


//     await textBox.fill("prashant");
//     console.log("Value filled in text box:", await textBox.inputValue());
    

    


// })


//Radio Button 

test('Test Radio Button', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const radioButtons:Locator = page.locator('#male')

    await expect(radioButtons).toBeVisible();
    await expect(radioButtons).toBeEnabled();
    await expect(radioButtons).not.toBeChecked();

    await radioButtons.check();
    await expect(radioButtons).toBeChecked();
})

import {test,expect,Locator} from  '@playwright/test';


test('locators',async({page})=>{
    // await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    // const logo:Locator=page.getByAltText('logo image')

    // await expect(logo).toBeVisible();
    

    // await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    // await expect(page.getByText('Welcome to our store')).toBeVisible();
    await page.goto('https://testautomationpractice.blogspot.com/')
    ///AUTOMATION\s+TESTING\s+PRACTICe/i
    // await expect(page.getByText('Automation Testing Practice')).toBeVisible();
    // await expect(page.getByRole('link',{name:'Home'})).click();


    // await page.getByLabel('Name:').fill('prashant');
    // await page.getByLabel('Email:').fill('pckundagol@gmail.com');  //not executing 


    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    // await page.getByRole('button',{name:"Primary Action"}).click()

    // await page.getByRole('button',{name:'Toggle Button'}).click();

    // await page.getByRole('textbox',{name:'Username:'}).fill('prashant')
    // await page.getByLabel('Username:').fill('prashant')
    // await page.getByRole('link',{name:'Home'}).click() //getting duplicate stric mode voilation
    // await page.getByRole('checkbox',{name:' Accept terms'}).click()


    // const text:Locator = page.getByText('This paragraph contains');
    // const textString=await text.textContent()
    // console.log(textString)

    // await page.getByText('Submit Form').click();

    // await page.getByLabel('Email Address:').fill('prashant kundagol')
    await page.getByPlaceholder('Enter your full name').fill('prashant kundagol')

    await expect(page.getByTitle('Click to save your changes')).toHaveText('Save');

    await page.waitForTimeout(5000)
    

    
    

    
})


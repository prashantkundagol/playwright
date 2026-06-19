//alert(),confirm(),prompt() dialogs/salers

//1> By default, dialogs are auto-dismissed by Playwright,so you don't have to handle them.
//2> Hower,you can register a dialog handler before the action that triggers the dialog to either
//3> dialog.accept() or dialog.dismiss() it.

import {test,expect,Locator} from '@playwright/test'


test ("simple Dialog",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog',(dialog)=>{
        console.log("Dialog type is:",dialog.type());// returns type of the dialog
        expect(dialog.type()).toContain('alert');
        console.log("Dialog Text:",dialog.message()) // returns message from dialog
        expect(dialog.message()).toContain('I am an alert box!');
        dialog.accept();
    });


    await page.locator("#alertBtn").click(); //opens dialog
    await page.waitForTimeout(5000);

})

test("conformation Dialog",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Register a dialog handler
    page.on('dialog',(dialog)=>{
        console.log("Dialog type is:",dialog.type());// returns type of the dialog
        expect(dialog.type()).toContain('confirm');
        console.log("Dialog Text:",dialog.message()) // returns message from dialog
        expect(dialog.message()).toContain('Press a button!');
        // dialog.accept(); //close dialog by accepting. 
        dialog.dismiss() //close dialog by dismissing.
    });


    await page.locator("#confirmBtn").click(); //opens dialog
    const text:string =await page.locator('#demo').innerText();
    console.log("output text:",text);

    expect(page.locator('#demo')).toHaveText("You pressed Cancel!")
    await page.waitForTimeout(5000);

})


test.only("prompt Dialog",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Register a dialog handler
    page.on('dialog',(dialog)=>{
        console.log("Dialog type is:",dialog.type());// returns type of the dialog
        expect(dialog.type()).toContain('prompt');
        console.log("Dialog Text:",dialog.message()) // returns message from dialog
        expect(dialog.message()).toContain('Please enter your name:');

        expect(dialog.defaultValue()).toContain("Harry Potter") // checks default value
        dialog.accept('prashant'); //close dialog by accepting. 
        // dialog.dismiss() //close dialog by dismissing.
    });


    await page.locator("#promptBtn").click(); //opens prompt dialog
    const text:string =await page.locator('#demo').innerText();
    console.log("output text:",text);

    expect(page.locator('#demo')).toHaveText("Hello prashant! How are you today?")
    await page.waitForTimeout(5000);

})
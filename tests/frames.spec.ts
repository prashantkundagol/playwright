 /*
 An iframe (short for "inline frame") is a HTML element that allows you to embed another HTML document within the current document 
 Iframes are commanly used to embed external content such as videos, maps, or web pages (as seen here) into web page with
 */
import {test,expect} from "@playwright/test"

test("frames demo",async ({page})=>{
await page.goto('https://the-internet.herokuapp.com/nested_frames')

//total number of frames attached to the page.
const frames=page.frames();
console.log("Number of frames:",frames.length)


// ---Approch 1: using page.frame()----
const frame =page.frame({url:"https://the-internet.herokuapp.com/frame_middle"});

if (frame)
{
    await frame.locator("[name='frame-middle']")
    // await frame.locator("[name='frame-middle']").fill("Hello")
}
else{
    console.log("Frame is not availble")
}
 await page.waitForTimeout(5000);

})

// ----Approch 2: Using frameLocator() ----

test("inner frames demo",async ({page})=>{
await page.goto('https://the-internet.herokuapp.com/nested_frames')

//total number of frames attached to the page.
const frames=page.frames();
console.log("Number of frames:",frames.length)


// ---Approch 2: using page.frame()----
const inputbox= page.frameLocator('[src="/frame_left"]').locator('[name="frame-left"]')

})

test.only('inner/childframes demo',async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/nested_frames")

    const bottom= page.frame({url:'https://the-internet.herokuapp.com/frame_bottom'});
    
    if(bottom){
        await bottom.locator('["name="frame-bottom"]');
        // await bottom.locator('["name="frame-bottom"]').fill("Wellcome")
        const childframes= bottom.childFrames();
        console.log("child frames inside the bottom",childframes.length)
        // const radiochildFrame(0).getByLabel("I am a human");
        // await radio.check(); //select radio button
        //await expect(raido).toBeChecked(); //assertion
    }
    else{
        console.log("Frame is not availble.")
    }
})

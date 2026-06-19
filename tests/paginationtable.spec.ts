import {test,expect,Locator} from '@playwright/test'

test('pagination',async({page})=>{
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html')
    
    let hasmorepages=true;
    while(hasmorepages)
        {
        const rows=await page.locator("#example tbody tr").all();
        for (let row of rows)
        {
            console.log(await row.innerText());
        }
        await page.waitForTimeout(3000);
        const nextbutton=await page.locator("button[aria-label='Next']");
        const isdisabled=await nextbutton.getAttribute('class'); //dt-paging-button disabled next

        if (isdisabled?.includes('disabled'))
            {
            hasmorepages=false;
            console.log("No more pages to navigate");
            }   
        else
            {                           
            await nextbutton.click();        
            }

    }

});

test("Filters the rows and count the number of rows",async({page})=>{ 
        await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html')
        const dropdown=await page.locator("#dt-length-0");
        await dropdown.selectOption('25');


        //Approch1 
        const rows= await page.locator("#example tbody tr").all();
        expect(rows.length).toBe(25);  //Assertion

        const rows2 =await page.locator("#example tbody tr");
        expect(rows2).toHaveCount(25);  //Assertion

    })

    test.only("search for specific text",async({page})=>{ 
        await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html')
        const searchbox=await page.locator("#dt-search-0"); 
        await searchbox.fill("Paul Byrd");

        const rows =await page.locator("#example tbody tr").all();

        if(await rows.length>1)
        {   
            let matchfound=false;
            for(let row of rows)
            {
                const rowtext=await row.innerText();
                if (rowtext.includes("Paul Byrd"))
                {
                    console.log("Found row with 'Paul Byrd'");
                    matchfound=true;
                    break;
                }
                

                else
                {
                    console.log("Row does not contain 'Paul Byrd'");
                }
            }
            // expect(matchfound).toBeTruthy(); //Assertion
            expect(matchfound).toBe(true); //Assertion
        }
        await page.waitForTimeout(3000);
    })


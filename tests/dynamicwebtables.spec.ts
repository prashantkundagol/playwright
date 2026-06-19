import {test,expect,Locator} from '@playwright/test'

test('dynamic web tables',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table:Locator=page.locator("#taskTable");
    await expect(table).toBeVisible();

    //Select the all rows and find number of rows
    const rows:Locator[]=await table.locator('tbody tr').all();
    console.log("Number of rows in table:",rows.length);
    expect(rows).toHaveLength(4)

    // Read each row to cheak chrome presence
    let cpuLoad='';

    for(let row of rows)
    {
        const processname=await row.locator('td').nth(0).innerText();
        if (processname=='Chrome')
        {
            const cpuLoad=await row.locator("td:has-Text('%')").innerText();   //css syntax
            // const cpuLoad=await row.locator("td,{hasText:'%'}").innerText();   //playwright syntax
            console.log("CPULoad of Chrome:",cpuLoad);
            break;
        }
    }
    //compare value with yellow table.
    const chromeboxtext=await page.locator(".chrome-cpu").innerText();
    console.log("chromebox text:",chromeboxtext)

    if (chromeboxtext.includes(cpuLoad))
    {
        console.log("Cpu load of Chrome is equal")
    }
    else{
        console.log("Cpu load of Chrome is Not equal")
    }
    expect(chromeboxtext).toContain(cpuLoad);

    
    // Network speed of Chrome process
    let NetworkSpeed='';
    for(let row of rows)
        {
            const ChromeNetworkSpeed=await row.locator('td').nth(0).innerText();
            if (ChromeNetworkSpeed=="Chrome")
                {
                    const NetworkSpeed=await row.locator('td',{hasText: 'MB/s'}).innerText();
                    console.log("Network speed of Chrome process:",NetworkSpeed)
                    break;
                }
            }
            
    await page.waitForTimeout(5000);
}) 

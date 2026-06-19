import {test,expect,Locator,Page} from '@playwright/test'

async function selectdate(targetYear:string,targetMonth:string,targetDate:string,page:Page,isfuture:boolean)
{
 while(true)
    {
        const currentMonth=await page.locator(".ui-datepicker-month").textContent();
        const currentYear=await page.locator(".ui-datepicker-year").textContent();

        if(currentMonth==targetMonth && currentYear==targetYear)
        {
            break;
        }

        if(isfuture)
        { 
        await page.locator('.ui-datepicker-next').click(); //Future
        }
        else
        {
        await page.locator('.ui-datepicker-prev').click(); //past 
        }    
    }
    
    const allDates= await page.locator('.ui-datepicker-calendar td a').all();

    for(let dt of allDates)
    {
        const dateText= await dt.innerText(); 
        if(dateText==targetDate)
        {
            await dt.click();
            break;
        }
    }
}


test ('Jquerydate picker',async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const dateInput=await page.locator("#datepicker");
    await expect(dateInput).toBeVisible();

    //Approch1  using fill()method
    // dateInput.fill('06/21/2025')
    
    await dateInput.click()//open datepiker 
    //select target date
    const year='2023';
    const month='June';
    const date='29';

    await selectdate(year,month,date,page,false)  //for future true,for past false
    const expecteddate='06/29/2023'
    await expect(dateInput).toHaveValue(expecteddate);
    
    await page.waitForTimeout(5000);
})

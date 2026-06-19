import {test,expect,Locator} from '@playwright/test'

test('bootstrapDatepicker', async ({page})=>{
    await page.goto('https://www.booking.com/');
    await page.getByTestId('searchbox-dates-container').click()

    //chcek-in Date Selection
    let CheckinYear:string = "2026";
    let CheckinMonth:string ="May";
    let CheckinDay:string ="30";

    //Navigate through the calendar to find the desired check-in month and Year
    while(true){
        const checkInMontheYear =await page.locator('#bui-calendar-month-2026-4').innerText(); //May 2026
        const currentMonth=checkInMontheYear.split(" ")[0];  
        const currentYear=checkInMontheYear.split(" ")[1];
        
        if(currentMonth==CheckinMonth && currentYear==CheckinYear){
            break;
        }else{
            await page.locator('button[aria-label="Next month"]').click();
        }

    }

    //select specifi checkin-date 
    let allDates= await page.locator('table.b8fcb0c66a tbody').nth(0).locator('td').all();
    let checkInDateSelected=false;

    for(let date of allDates){
        const dateText=await date.innerText();
        if(dateText==CheckinDay){
            await date.click();
            checkInDateSelected=true;
            break;
        }
    }
    
    // Assertion to  confirm checkin  date was confirmed.
    expect(checkInDateSelected).toBeTruthy();

    let checkoutYear:string ="2026";
    let checkoutMonth:string="July";
    let checkoutday:string="25";

    while(true){
        const checkOutMonthYear= await page.locator('#bui-calendar-month-2026-5').innerText();
        const currentMonth=checkOutMonthYear.split(" ")[0];  
        const currentYear=checkOutMonthYear.split(" ")[1];

        if (currentMonth== checkoutMonth && currentYear == checkoutYear){
            break;
        }else{
            await page.locator('button[aria-label="Next month"]').click();
        }
    }

    //select the specific checkout-out date
    allDates=await page.locator('table.b8fcb0c66a tbody').nth(1).locator('td').all();
    let checkoutDateSelected=false;

    for(let date of allDates){
        const dateText =await date.innerText();
        if (dateText == checkoutday){
            await date.click();
            checkoutDateSelected= true;
            break;
        }
    }
    //Assertion to confirm check-ut date was selected
    expect(checkoutDateSelected).toBeTruthy();

    await page.waitForTimeout(5000);
});


//irctc --> practice 


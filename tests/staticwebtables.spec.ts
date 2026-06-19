import {test, expect,Locator} from '@playwright/test'

test("static web table",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

const table:Locator=page.locator("table[name='BookTable']")
await expect(table).toBeVisible();

//1)count number of rows
const rows:Locator=table.locator("tr"); //return all rows including header
await expect(rows).toHaveCount(7);  //7 approch 1

const rowcount:number =await rows.count();
console.log("Number of rows in a table:",rowcount)
expect(rowcount).toBe(7);   //approch2 

// 2)count number of columns
const columns=rows.locator("th")
const columnscount:number =await columns.count();
console.log("Number of columns in a table:",columnscount);
expect(columnscount).toBe(4);

//3) read all data from 2nd row(index 2 means 3 row includeing header)
const secondRowCells:Locator=rows.nth(2).locator("td")
const secondRowTexts:string[] =await secondRowCells.allInnerTexts();
console.log("2nd row data",secondRowTexts)
await expect(secondRowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ])

console.log('printing 2nd row data....')
for (let text of secondRowTexts)
{
    console.log(text);
}

//Read all data from the table(excluding header)
console.log("printing all row data........")
const allRowData=await rows.all();
for (let row of allRowData.slice(1))  //slice --> skip header row
    {
    const cols=await row.locator("td").allInnerTexts();
    console.log(cols.join('\t'));
}

//prink book names where author is Mukesh
console.log("Books written by Mukesh")

const mukeshBooks:string[]=[];
for (let row of allRowData.slice(1))
{
    const cells=await row.locator('td').allInnerTexts();
    const author=cells[1];
    const book=cells[0];

    if (author=="Mukesh")
    {
        console.log(`${author} \t ${book}`)
        mukeshBooks.push(book);
    }
}

expect(mukeshBooks).toHaveLength(2); //Assertion 

//calclate total price of all books
let totalPrice=0;
for (let row of allRowData.slice(1))
{
    const cells=await row.locator('td').allInnerTexts();
    const price=cells[3];

    totalPrice=totalPrice+parseInt(price);

}
console.log("Total price: ",totalPrice);
expect(totalPrice).toBe(7100);


})


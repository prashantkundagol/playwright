import {test,expect,Locator} from '@playwright/test'

test("comparing methods",async({page})=>{
//innertText() vs textContent()  method tests

await page.goto("https://demowebshop.tricentis.com/")
const products:Locator=page.locator(".product-title")//6
/*
// console.log(await products.nth(1).innerText()); //Extract the plain text
// console.log(await products.nth(1).textContent());

// console.log(await products.count()) 
const count=await products.count()

for(let i=0;i<count;i++){
    // const productName=await products.nth(i).innerText()
    // console.log(productName);
    const productName=await products.nth(i).textContent()
    console.log(productName?.trim());

}
*/

/*
//allInnerTexts() vs allTextContent() method tests

const productNames: string[]=await products.allInnerTexts();
console.log(productNames);

const productNames2: (string | null)[]=await products.allTextContents();
console.log(productNames2);

const productNamesTrimmed=productNames2.map(text=>text?.trim());
console.log(productNamesTrimmed);   
*/



/*
//all ()  convers --->array of locator 
const productslocators:Locator[]=await products.all();
// console.log(productslocators);

// console.log(await productslocators[1].innerText());

//for of loop
for (let productloc of productslocators){
    console.log(await productloc.innerText());

    }
//for in loop
// for(let i in productslocators)
//     {
//     console.log(await productslocators[i].innerText());
//     }
*/

})
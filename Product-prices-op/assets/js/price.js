
let price=[50, 1200, 300, 80, 1500, 500]

for(let i=0 ; i<price.length ; i++)
{
    if(price[i]<100)
    {
        price.splice(i,1);
        i--;
    }
}

for(let i=0 ; i<price.length ; i++)
{
    if(price[i]>1000)
    {
        price[i]=price[i] * (1 - 20/100);
    }
}

let sum=0
for(let i=0 ; i<price.length ; i++)
{
    sum+=price[i];
}

console.log("Edited product price: ", price)
console.log("Total final price of the shopping cart : ", sum)

let number=[5, 0, 2, 0, 8, 1]

for (let i=number.length-1 ; i>=0 ; i--)
{
    if(number[i]===0)
    {
        number.splice(i, 1);  
        number.push(0); 
        i++;
    }
}

console.log("Add 0 to the end of the array : ", number)
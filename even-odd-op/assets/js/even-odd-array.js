
let numbers=[1,4,7,2,9,12];
let odds=[];

for(i=0 ; i<numbers.length ; i++)
{
    if(numbers[i] % 2 !== 0)
    {
        odds.push(numbers[i]);
        numbers.splice(i,1);
        i--;
    }
}

console.log("the even array: ",numbers)
console.log("the odd array: ",odds)





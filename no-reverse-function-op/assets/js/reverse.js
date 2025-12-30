
let numbers=[10, 20, 10, 30, 20, 40]
let reverse=[]

for(let i=numbers.length ; i>0 ; i--)
{
    reverse.push(numbers.pop());
}

for(let i=0 ; i<reverse.length ; i++) {
    numbers.push(reverse[i]);
}


console.log("the reversed array :",numbers)

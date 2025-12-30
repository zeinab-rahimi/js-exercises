
let numbers = [10, 20, 10, 30, 20, 40];

for (let i=0 ; i<numbers.length ; i++)
{
  for(let j=0 ; j<i ; j++)
  {
    if (numbers[i] === numbers[j]) 
    {
      numbers.splice(i,1);
      i--;
    }
  }
}

console.log("the clean array: ", numbers);

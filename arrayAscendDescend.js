const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`The Given array is: ${array_roll_numbers}`);

console.log(`Reverse the Array`);
array_roll_numbers.reverse();
console.log(array_roll_numbers);

console.log(`Sort the Array without using custom logic`);
array_roll_numbers.sort();
console.log(array_roll_numbers);
 
console.log(`Sort the Array ascending order using custom logic`);
array_roll_numbers.sort((a,b)=>{
    return a>b ?1:-1;
});
console.log(array_roll_numbers);

console.log(`Find the greatest number from array`);
var greaterNum=array_roll_numbers.slice(-1);
console.log(greaterNum);

console.log(`Find the smallest number from array`);
var smallerNum=array_roll_numbers.slice(0,1);
console.log(smallerNum);

console.log(`Remove duplicates from array`);
const newArray=[...new Set(array_roll_numbers)];
console.log(newArray);


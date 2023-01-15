console.log(`"The total number of vowels in the string are : "`);
var word="I am very good IT Developer";
var count=0;
for (let index=0; index<word.length;index++){
  var string=word.charAt(index);   

if(string=='a'||string=='e'||string=='i'||string=='o'||string=='u'||string=='A'||string=='E'||string=='I'||string=='O'||string=='U'){

    count=count+1;
}
}
console.log(`${count}`);
console.log(`____________________________________________________`);


console.log(`"The sum of cube of numbers : `);
function sumOfCube(){
    
    var cube=(1*1*1+2*2*2+3*3*3+4*4*4+5*5*5);
    console.log(`${cube}`);
    

}
sumOfCube();
(`_________________________________________________________`)

function oddPositionedChars(char)
{
    var emptyString="";
   var string=char.split(" ").join(" ");
   console.log(`${string}`);
   for (let index = 0; index < string.length; index++)
    {
    
       if(index%2!=0)
    {
       emptyString=emptyString+string[index]; 
    }
  }
   
  console.log(`"Odd positioned character in the string is :" ${emptyString}`);   
}

oddPositionedChars(`"Hard work always pays back"`);
oddPositionedChars(`"Soon I will be Angular IT Champ"`)
console.log(`\n`);
console.log(`__________________________________________________`);




console.log(`Find out the factirial of these numbers:\n`);
function factorialNumber(num)
{
  var fact=1;
  
  for (let i = 1; i <=num; i++) {
    fact=fact*i;
    
  }
  console.log(`The factorial of "${num}" is : ${fact} `);
}
factorialNumber(5);
factorialNumber(7);
factorialNumber(9);
factorialNumber(11);

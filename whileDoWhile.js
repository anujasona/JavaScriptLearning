console.log(`Print the numbers from 5 to 15:`);
var a=5;
while (a<=15) 
{
  console.log(a);
  a++;    
}



console.log(`Print the numbers from 50 to 40:`);
var i=50;
while (i>=40)
 {
console.log(i);
i--;    
}


console.log(`find the first 15 odd numbers:`);
var b=1;
var counter=0;
while(b<=100) 
{

  if (b%2!=0) {
  
    console.log(b);
    counter=counter+1;
  }
  if(counter==15)
  {
    break;
  }
   b++;
   }

console.log(`find the first 15 even numbers:`);
var a=1;
var counter=0;
while(a<=100) 
{

  if (a%2==0) {
  
    console.log(a);
    counter=counter+1;
  }
  if(counter==15)
  {
    break;
  }
   a++;
}


console.log(`print the table of 5 to 50 :`);
var num=5;
do {
  console.log(num);
  num=num+5;
} 
while (num<=50);


console.log(`print the table of 10 to 100 :`);
var c=10;
do {
  console.log(c);
  c=c+10;
} while (c<=100);


console.log(`print the reverse table of 100 to 10 :`);
var d=100;
do {
  console.log(d);
  d=d-10;
} while (d>=10);


console.log(`1. Log on console with mweaningful message inside Arrow Function\n`);
let show = () =>{
   console.log("Good Morning,Today is Monday");  
}
show();

console.log(`______________________________________________\n`);


console.log(`Perform Multification operation and using bydefault value to the 3rd parameter\n`);
 let operator = (value1,value2,value3=1) =>{
       let totalMul=value1*value2*value3;
       console.log(`The multification of the given number is: ${totalMul}`);
 }
 operator(5,5,2);
 operator(10,4);

 console.log(`_____________________________________________\n`);


 console.log(`Using arrow function and invoke the values and addition of it\n`);
 let add = (num1,num2,num3,num4,num5) =>{
      let totalAdd=num1+num2+num3+num4+num5;
      //console.log(`The Addition of the given number is: ${totalAdd}`);
      return totalAdd;
 }
  var result=add(100,100,200,349,756);
  console.log(` 3.a The Addition of the given number is: ${result}`);
  var result=add("I am","learning","ES6","features","in depth");
  console.log(` 3.c The Addition of the given number is: ${result}`);
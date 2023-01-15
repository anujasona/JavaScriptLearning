var ternal=function(num1,num2){
  var check = num1>num2  ? num1 : num2;
  console.log(`The greatest number is :${check}`);
}
 ternal(10,-10);
 ternal(800,899);
 console.log(`___________________________________________________________`);
 var checkEvenOdd=function(value){
   var check=value%2==0 ?"EVEN or TRUE " :" ODD or FALSE";
   console.log(`the given numbers is ${value} and Number is ${check}\n`);
 return check;
 }
  var evenOdd1=checkEvenOdd(29);
  var evenOdd1=checkEvenOdd(44);
  var evenOdd1=checkEvenOdd(101);
  var evenOdd1=checkEvenOdd(0);
  console.log(`___________________________________________________________`);

  var evenOddLength= function(data){
    var wordlength=data.length;
    var check=wordlength%2==0 ? "even":"odd";
    console.log(`The given value "${data}",and length is ${wordlength} hence ${check}\n`);
  }
  evenOddLength("JavaScript");
  evenOddLength("developer");
  evenOddLength("Google");
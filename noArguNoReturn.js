function noArgu()
{
    console.log("Function Call Multiple time no Argument and no return value");
    return;
}
noArgu();
console.log("***********************************************************");
function noReturn()
{
  
    console.log("function call Multiple time no Argument and no return values");
    return;  
}
 noReturn();
 console.log("------------------------------------------------------------");
 console.log("function call with arguments");

 function personalDetails(firstName,lastName,collegeName){

 console.log("Personal details:",firstName,lastName,collegeName);
  
 }
 personalDetails("Anuja","Sonawane","SVPM college of malegaon");
 personalDetails("Ajay","Sonawane","College of Management");
 console.log("--------------------------------------------------------------");
 function swapValuesDude(para1,para2)
        
 {
   console.log("***********************Before Swap**************************");
   console.log("Before Swap:", para1, para2);
   var para3=para1;
   para1=para2;
   para2=para3;
   
   console.log("***********************After Swap***************************");
   
   console.log("After Swap:", para1, para2);  
 }
 swapValuesDude("Virat","Anushka");
 swapValuesDude(1000, 2000);
 console.log("-------------------------------------------------------------");

//  function swapValuesDude2(p1,p2){
//     console.log("**************before swap values****************");
//     var p1=1000;
//     var p2=2000;
//     console.log("values:",p1,p2);
//     console.log("**************after swap values******************");
//     var p3=p1;
//     p1=p2;
//     p2=p3;
//     console.log("value:",p1,p2);
//  }
//   swapValuesDude2("1000,2000")

   function addThreeValues(add1,add2,add3){ 

   console.log("Addition the values:",add1+add2+add3);
    return "Return 23 paise";
    
   } 
  addThreeValues(10.23,600,40)
  addThreeValues("Hello","Good","Morning")
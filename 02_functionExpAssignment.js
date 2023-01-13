var squre=function(num){
 console.log(num, "=", num*num);
}
console.log("The squre of these numbers are:" );
squre(5);
squre(6);
squre(25);
squre(100);
console.log("_________________________________________");
var data=function(){
    console.log("This type of variable is:",typeof data);
}
data();
console.log("__________________________________________");
var squre=function(length,width){
    console.log("The Area of Rectangle is:",length*width);
}
squre(499,917);
console.log("___________________________________________");
var swap=function(val1,val2){
    console.log("Before Swap Names is:",val1,val2);
    var val3=val1;
    val1=val2;
    val2=val3;
    console.log("After swap Names is:",val1,val2);
}
swap("Virat","Anushka");
console.log("_________________________________________");
var swapVal=function(val1,val2){
   console.log("Before swap value is:",val1,val2);
   var val3=val1;
   val1=val2;
   val2=val3;
   console.log("After swap value is:",val1,val2);
}
swapVal(1000,2000);
console.log("_________________________________________");
// var string=function(data){
//    console.log("String is:",data);
//    var sequence="JS the most popular language";
//    console.log("Total character in this string:",sequence.length);
//    console.log("The character at index 6 is:",sequence.charAt(6));
//    console.log("The character at index 11 is:",sequence.charAt(11));
//    var total=sequence.length;
//    console.log("Last character length property is:",sequence.charAt(total-1));
//    console.log("First character given string is:",sequence.charAt(0));
//    console.log("Length of given string is:",sequence.length);
//    console.log("squre of 28 is=",sequence.length*sequence.length);
// // console.log("squre of 28 is=",total*total);
//    console.log("_______________________________________________________________");
// }
// string("JS the most popular language");

var string=function(data){
    console.log("String is:",data);
    console.log("Total character in this string:",data.length);
    console.log("The character at index 6 is:",data.charAt(6));
    console.log("The character at index 11 is:",data.charAt(11));
    var total=data.length;
    console.log("Last character length property is:",data.charAt(total-1));
    console.log("First character given string is:",data.charAt(0));
    console.log("Length of given string is:",data.length);
    //console.log("squre of 28 is=",data.length*data.length);
    console.log("squre of 28 is=",total*total);
    console.log("_______________________________________________________________");
 }
 string("JS the most popular language");

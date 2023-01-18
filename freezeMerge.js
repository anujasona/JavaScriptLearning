const personalDetails = {
    myName: "Anuja Sonawane",
    mobNo: 7709143962,
    address: "pune",
    pin: 456710
}
console.log(`Personal Details:` ,personalDetails);
const collegeDetails = {
    collegeName :"SVPM",
    location: "Baramati",
    pin: 413116
}
console.log(`College Details:` ,collegeDetails);
console.log(`-------------------------------Merge the two objects----------------------------------`);

const mergeObject=Object.assign(personalDetails,collegeDetails)
console.log(mergeObject);
console.log("--------------------Create an Array of Friends Name And Freeze it--------------------");
const frdName =["snehal","sandhya","poonam","pooja"];
console.log(`Friend names by using array:`, frdName);
Object.freeze(frdName)
for (const  iterator of frdName) {
    console.log(iterator);
}

var myString="Codemind Technology";
var EmptyString="";
for (let index = myString.length-1; index >=9; index--) {
    var myString1 = myString.charAt(index);
    EmptyString=EmptyString+myString1; 
}
var newString= "Codemind";
var concatString=newString+ " " +EmptyString;
console.log("--------------Reverse String Technology--------------");
console.log("Codemind Technology:", concatString);

var isMarried = true;

let name = "John";
let frdName = "Tom"
name = frdName;

const age = 23;
// const frdAge = 25;
// age = frdAge;// Not allowed


const anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
Object.freeze(anil);
anil.country = "India";
anil.age = 27;
delete anil.company;
console.log(anil);

const sunil = {
    age: 24,
    name: "Sunil",
    company: "Apple"
}
// anil = sunil; // Not allowed


// Array freezing 
const arrayNumbers = [2, 4, 5, 8];
// arrayNumbers = []; /// Not allowed
// Freeze array
Object.freeze(arrayNumbers);
// arrayNumbers.push(10); not allowed before the freeze use
console.log(arrayNumbers);

const sunilAddress = {
    city : "Pune",
    pin: "431202"
}
// Merging two objects
Object.assign(sunil,sunilAddress)
console.log(sunil);
console.log(sunilAddress);


console.log(`_________________deep clone_____________________________`);
let myName = "Anil";
let yourName = "Sunil";

myName = yourName; // Deep Clone always performed on primitive data type

console.log(myName);
console.log(yourName);

yourName = "Jenifer";
console.log(myName);
console.log(yourName);



console.log(`_______________________shallow clone__________________________________`);
let anuja = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
let rajesh= {
    age: 26,
    name: "Sunil",
    company: "Google"
}
anuja = rajesh; // Shallow cloning
rajesh.country = "India";
console.log("Sunil: ", rajesh); // 
console.log("Anil: ", anuja); //

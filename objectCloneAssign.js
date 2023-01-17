const arrayNums=[20,3,4,56,90,400,49];
console.log(`1. Original Array is:`,arrayNums);

console.log(`2. Shallow Clone and update the array`);
let array=arrayNums;
array.push(55,66);
console.log( `shallow Clone array updating:`,array);

console.log(`3. Deep clone using spread operator`);
let arrayClone =[...arrayNums];
console.log(`Deep clone array is:`,arrayClone);
array.push(10,25);
console.log(`Original Array Updation is:`,array);


const arrayEven=[2,30,14,8];
let arrayNum=[20,3,4,56,90,400,49];
console.log(arrayEven);
console.log(arrayNum);
console.log(`4. Merge and concat the Array using spread operator`);
let operator=[...arrayEven,...arrayNum];
console.log(operator);


console.log(`5. Create employee_info object`);
const employee_info={
    emp_id:27,
    emp_name:"john Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"      
   },
   address:{
    locality:{
        colony:"Om Vrindavan Society",
        street:"Kanch Pokali,411202"
    },
    city:"Mumbai",
    State:"Maharashtra",
    Country:"India"
    },
    mobiles:["+918600345688","1800-4567 32","+91- 9096 5678 77"]
}
console.log(`6. Employee Details Are: ${employee_info.address.locality.colony},${employee_info.address.locality.street},${employee_info.address.city},${employee_info.address.State},${employee_info.address.Country}`);
console.log(`7. Employee Numbers Are:`,employee_info.mobiles);

console.log(`8. Update july month salary and clone using JSON.Stringfy()`);

let deepCopy=JSON.parse(JSON.stringify(employee_info));

deepCopy.salary.july_month="80 0000INR";
console.log(`Update salary is:`,deepCopy.salary);

console.log(`9. Update property country to original object`);
employee_info.address.Country="United Kingdom";
console.log(`Update country is:`,employee_info.address.Country);

console.log(`10. Logging updated values of original object:`);
console.log(employee_info.emp_id);
console.log(employee_info.emp_name);
console.log(employee_info.salary);
console.log(employee_info.address);
console.log(employee_info.mobiles);

console.log(`Cloned object updated values`);
console.log(deepCopy.emp_id);
console.log(deepCopy.emp_name);
console.log(deepCopy.salary);
console.log(deepCopy.address);
console.log(deepCopy.mobiles);


console.log(`___________________________________________________________________`);
const car={
    carName:"Creta SX",
    company:"Hundai",
    launchYear:2017
}
const carEngine={
    enginePower:"1499CC",
    maxPower:"113 BHP"
}
console.log(`Using assign method merge the object details`);
let cars=Object.assign(car,carEngine);
console.log(cars);

console.log(`Using spread operator merge the objects`);
let opera={...car,...carEngine};
console.log(opera);

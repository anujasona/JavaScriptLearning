console.log(`1. Using forEach() with Arrow Function log on console array elements with its index: `);
const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601]

    array_numbers.forEach((value,index)=> {
        console.log(`index`,index,`value`,value);
    });
 
    console.log(`===============================================`);
    console.log(`2. Find the Positive Numbers: `);
    array_numbers.forEach((currentValue) => {
        if(currentValue>0){
            console.log(`Positive Number: ${currentValue}`);
        }
        
    });
    console.log(`===============================================`);
    console.log(`3. Find the Negative Numbers, add into new array: `);
    let array=[];
    array_numbers.forEach((currentValue) => {
        
        if(currentValue<0){
            array.push(currentValue);
            //console.log(`Negative Number: ${currentValue}`);
        }
        
    });
    console.log(array);

    console.log(`====================================================`);
    console.log(`4. Find the Even Numbers Using forEach() with arrow Function: `);
    let evenNum=0;
    array_numbers.forEach((currentValue) => {
        if (currentValue%2==0) {
           console.log(` The Even Numbers is: ${currentValue}`); 
           
        }
    });
    //    console.log(`_____________________within Array even value store__________________`);
    // let evenNum2=[];
    // array_numbers.forEach((currentValue) => {
    //     if (currentValue%2==0) {
    //       evenNum2.push(currentValue);
    //         }
    // });
    // console.log(evenNum2);

    console.log(`========================================================`);
    console.log(`5. Find the Sum of all elements from array_numbers: `);
    let sumOfElement=0;
    array_numbers.forEach((currentValue) => {
     
           sumOfElement=sumOfElement+currentValue;
          
    });
    console.log(sumOfElement);

    console.log(`===================================`);

    console.log(`6. Only Even position array value log on console: `);
    const arrayEvenPosition=[];
  array_numbers.forEach((value,index)=>{
    if(index%2 == 0){
        arrayEvenPosition.push(value);
        //console.log(value);
    }
});
console.log(arrayEvenPosition);


    
// Write a Function expression with one arg—> age to check whether he or she is eligible for voting or not, Then accordingly display message.
// Ex. 45, 17, 8, 20, -10, 200, 0

var votingEligibility = function (age){
    if (age<=0 || age>120)
     {
        console.log(`Invalid data: ${age}`);
        return;
       } 
      if (age>=18 && age<120)
        {
        console.log(`Congratulation you can vote ${age}`);
        return;
        }
        if (age>0 && age<18) 
        {
          console.log(`You are not eligible for vote ${age}`);
          return;  
        }
       else{
        console.log(`Please enter valid age"${age}"`);
       }
    }
  
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);
votingEligibility("Fourty Five");
console.log(`___________________________________________________\n`);




function isEvenOrOdd(num) {
    if (typeof num == "number") {
      console.log(`Valid number ${num}`);
      if (num % 2 === 0) {
        console.log(`Even number`);
      } else {
        console.log(`Odd Number`);
      }
    } else {
      console.log(`Invalid number ${num}`);
    }
  }
  isEvenOrOdd(20);
  isEvenOrOdd(11);
  isEvenOrOdd("30");
  console.log(`\n`);





  console.log(`---------------Grade System----------------\n`);
  function gradeCalculation(marks)
      {
        if (marks>=90&&marks<=100)
            {
                console.log(`Fantastic Marks ${marks}: your grade is A+`);      
                return;
            }
             if (marks>=75&&marks<90) 
                {
                  console.log(`Excellent Marks ${marks}: your grade is A`);  
                  return;
                }
                  if (marks>=50&&marks<75)
                  {
                      console.log(`Good marks ${marks}: your grade is B`);
                      return;
                  }
                    if (marks>=35&&marks<50) 
                      {
                          console.log(`Marks is ${marks}: your grade is C: Need improvment`); 
                          return; 
                      }
                        if (marks<35&&marks>0)
                        {
                        console.log(`${marks} your result is fail`);
                        return;
                        }
                          
                      else(marks<=0 ||marks>100);
                      {
                      
                         console.log(`${marks}: Please provide the valid marks`);
                          }
                      }
      gradeCalculation(98);
      gradeCalculation(80);
      gradeCalculation(90);
      gradeCalculation(0);
      gradeCalculation(150);
      gradeCalculation(-7);
      gradeCalculation(35);
      gradeCalculation(29);
      gradeCalculation(64);
      gradeCalculation(49);
  

  

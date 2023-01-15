console.log(`---------Voting Eligibility Criteria---------\n`);
var ageGrade=function(age)
{   
      if (age>0 && age<18) 
      {
        console.log(`${age}: Age is not eligible for voting  `);
      }
      if (age>=18 && age<120) 
      {
       console.log(`${age}: Age is eligible for voting`);  
      }
      if (age<=0||age>120) 
      {
        console.log(`${age} : "This is Invalid data"`);
        
      }
}
ageGrade(45);
ageGrade(17);
ageGrade(8);
ageGrade(20);
ageGrade(-10);
ageGrade(200);
ageGrade(0);
console.log(`\n`);
console.log(`---------------Grade System----------------\n`);
function gradeCalculation(marks)
    {
      if (marks>=90&&marks<=100)
      {
        console.log(`Fantastic Marks ${marks}: your grade is A+`);      
      }
      if (marks>=75&&marks<90) 
      {
       console.log(`Excellent Marks ${marks}: your grade is A`);  
      }
      if (marks>=50&&marks<75)
       {
         console.log(`Good marks ${marks}: your grade is B`);
      }
      if (marks>=35&&marks<50) 
      {
      console.log(`Marks is ${marks}: your grade is C: Need improvment`);  
      }
      if (marks<=0||marks>100) 
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

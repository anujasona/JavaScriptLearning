class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil= new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinayak= new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahesh= new Employee(99,"Mahesh","HR",85000,"Infy");

array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahesh];

console.log(`1. Find all the objects from TCS and log console company name and employee name:\n `);
console.log(`----------------------`);
console.log(`Comp_name | Emp_name`);
console.log(`----------------------`);
var empCompany=array_emps.filter((currentValue) =>{
    return currentValue.emp_company=="TCS";
});
empCompany.forEach((currentValue) => {
    console.log(" ", currentValue.emp_company,"    |   " ,currentValue.emp_name, );
});
console.log(`-------------------------Using Ternary Operator And Function Expression--------------------------\n`);
var interviewEligible=function(gradScore,hscScore,sscScore,candidateName)
{
 var score=(gradScore>=70 || hscScore>=80 || sscScore>90) ? `Congrates "${candidateName}" you are eligible for TCS interview\n` : `Unfortunately "${candidateName}" you are not eligible for interview\n`; 
  console.log(`The selection of stdents:${score}`);   

}

interviewEligible(80,86,90,"Anuja Sonawane");
interviewEligible(70,65,55,"Rashmi Jadhav");
interviewEligible(60,79,88,"Poonam Jadhav");



console.log(`Check out few interesting fact and log result on console with reason\n`);
 0=='';
console.log(`The converstion of (0=='') is: ${0==''}\n`);
0=='0';
// var num=+'0';
console.log(`The conversion of (0=='0') is: ${0=='0'}\n`);
0==false;
console.log(`The conversion of(0==false) is: ${0==false}\n`);
null==undefined;
console.log(`The conversion of (null==undefined) is: ${null==undefined}\n`);
1==[1];
console.log(`The conversion of (1==[1]) is: ${1==[1]}\n`);
1==true;
console.log(`The conversion of (1==true) is: ${1=='1'}`);


console.log(`______________________Male Marriage Eligibility_________________________`);
function maleMarriageEligibility(gender,age,boyName){
   var eligible=(gender="male" && age>=21) ?" eligible for marriage" : "not eligible for marriage"
   console.log(`Hey "${boyName}" you are ${eligible}`);
   return eligible;
}
var criteria=maleMarriageEligibility("male",25,"Billgates");
var criteria=maleMarriageEligibility("male",17,"Stew jobs");

console.log(`______________________FeMale Marriage Eligibility_________________________`);
function femaleMarriageEligibility(gender,age,boyName){

    var eligible=(gender="female" && age>=18) ?" eligible for marriage" : "not eligible for marriage"
    console.log(`Hey "${boyName}" you are ${eligible}`);
    return eligible;
 }
 var criteria=femaleMarriageEligibility("female",16,"Jenifer");
 var criteria=femaleMarriageEligibility("female",27,"Malinda Gates");
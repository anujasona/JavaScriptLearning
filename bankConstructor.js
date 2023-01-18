console.log("-----------------------------Bank Details-----------------------------");
function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
  }
  Bank.prototype.openTime="9 P.M IST";
  Bank.prototype.closeTime="6 P.M.IST";
  let yesBank=new Bank ("yesBank","Pune",5663834738,221);
  let sbiBank=new Bank ("sbiBank","Mumbai",5663834738,222);
  let mahBank=new Bank ("mahBank","Delhi",5663834738,223);
  let axisBank=new Bank ("axisBank","Nagpur",5663834738,224);

  console.log(`The bank details is:`, yesBank);
  console.log(`The bank details is:`, sbiBank);
  console.log(`The bank details is:`, mahBank);
  console.log(`The bank details is:`, axisBank);
console.log("-------------------Open and Close Bank Time----------------------");
console.log(`The Open Time of SBI Bank is": "${sbiBank.openTime}" |  The close Time of SBI Bank is: "${sbiBank.closeTime}"`);
console.log(`The bank name is: "${axisBank.bankName}" |  The close time of axis bank is: "${axisBank.closeTime}"`); 
console.log(`the bank name is: "${yesBank.bankName}"  |  The Branch code is: "${yesBank.branchCode}"  |  The open Time is : "${yesBank.openTime}"`);
  
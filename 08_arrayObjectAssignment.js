class Bank {
    constructor(bank_name,location,account_no,ifsc,interest_rate){
     
        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate;
    }
    
}
console.log(`----------------A) Create objects of these banks----------------------`);
let axisBank = new Bank("Axis Bank","Pune",56456764577,"AX67788965","10%");
let sbiBank = new Bank("SBI Bank","Mumbai",8900877568,"SB5645672","8%");
let iciciBank = new Bank("ICICI Bank","Nagpur",567787899,"IC45653667","12%");
let kotakBank = new Bank("Kotak Bank","Delhi",6876589879,"KO56878987","9%");
let hdfcBank = new Bank("HDFC Bank","Chennai",57348930843,"HD5720862","12%");
let punjabBank = new Bank("Punjab Bank","Pune",3986557777,"PU1290656","8%");

console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(punjabBank);

 console.log(`B) object elements in a array and traverse it Using for of loop:`);
const combineObjectArray=[axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,punjabBank];
for (const iterator of combineObjectArray) {
  console.log(`The bank name and location are: ${iterator.bank_name}, ${iterator.location}`);
}

console.log(`C) Find the object kotak bank using for of loop:`);
for (const iterator of combineObjectArray) {
    if (bank_name="Kotak Bank") {
        console.log(kotakBank);
      break; 
    }   
}

console.log(`D) Using for loop Details of  all objects :`);
for (let index = 0; index < combineObjectArray.length; index++) {
    const element = combineObjectArray[index];
    console.log(element);
}

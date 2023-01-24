console.log(`A) Create a class using Data members:\n `);
class Bank {
    constructor(bank_name,location,account_no,ifsc,interest_rate){
     
        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate;
    }
    
}
console.log(`----------------B) Create objects of these banks----------------------\n`);
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

console.log(`C) Create a Map using-> Key-Account no & Object-Banks:\n `);
const bankdetails = new Map();
bankdetails.set(56456764577,axisBank);
bankdetails.set(8900877568,sbiBank);
bankdetails.set(567787899,iciciBank);
bankdetails.set(6876589879,kotakBank);
bankdetails.set(57348930843,hdfcBank);
bankdetails.set(3986557777,punjabBank);

console.log(`D) Traverse Map -> Log only Bank Name,Account No,Interest Rate:\n`);
const traverseBank= bankdetails.keys();
for (const key of traverseBank) {
    const bank=bankdetails.get(key);
    console.log(bank.bank_name," ",bank.account_no," ",bank.interest_rate);
}
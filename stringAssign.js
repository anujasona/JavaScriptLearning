function squareOfWordLength(word){
console.log(`------Given String Is: "${word}"-------`);
var wordLength = word.length;
console.log(`Length of Word is: ${wordLength} : Length Square is: ${wordLength*wordLength}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

var string = function(){
    var str ="I Am Angular Developer";
    console.log(`Given String is: ${str}`);
    var strLength =str.length;
    console.log(`length of Given String is: ${strLength}`);
    var wordSplit = str.split(" ");
    console.log(`Split Words: ${wordSplit}`);
    var countWord = wordSplit.length;
    console.log(`Total Word Count is: ${countWord}`);
    console.log(`Length is Divided By Total Words are: ${strLength/countWord}`);
    console.log(`Length is Multiple By Total Words are: ${strLength*countWord}`);
}
string();
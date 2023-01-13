var string=function (){
   var string2="     Hey you are doing good, keep it up    ";
    console.log("1. Print the string:",string2);
    var stringCount=string2.length;
    console.log("2. The length of the string is:",stringCount);
    var removeSpace=string2.trim();
    console.log("3. Remove the extra spaces:",removeSpace);
    var count=stringCount-removeSpace.length;
    console.log("4. Print the total number of extra spaces remove",count);
    console.log("5. print first Char:",removeSpace.charAt(0)) 
    console.log("5. Print Last Char:",removeSpace.charAt(removeSpace.length-1));
    var totalWord=removeSpace.split(" ");
    console.log("6. Total Words count after removivg all spaces is:", totalWord.length);
    var index=removeSpace.indexOf("good");
    console.log("7. Index of word", "Good", "is:", index);
    console.log("8.1. Substring starting from index 22 using substring is:",string2.substring(22));
    console.log("8.2. Substring starting from index 22 using slice is:", string2.slice(22));
    var ends=removeSpace.endsWith("up");
    console.log("9. Is string ends with word up:",ends);
    var starts=removeSpace.startsWith("Hey");
    console.log("10. Is string starts with word Hey:",starts);
       
}
string();
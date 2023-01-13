function squreOfWordLength(string){
    var wordLength=string.length;
    //var lengthSquare=wordLength*wordLength;
    console.log(`1) Length of the Words is:${wordLength} * Square of these length:${wordLength*wordLength}\n`);
  //console.log(`Square of these length:${lengthSquare}\n`);
}
squreOfWordLength("Java Script");
squreOfWordLength("Google Chrome");
squreOfWordLength("Developer Smart");

var operator=function(){
   var string="I am Angular Developer";
   var length=string.length;
   console.log(`2) Length of the string:${length}\n`);
   var total=string.split(" ");
   var total1=total.length;
   console.log(`3) Total number of words available in the string:${total1}\n`);
   var devide=length/total1;
   console.log(`4) Divide by total words in string:${devide}\n`);
   var multi=length*total1;
   console.log(`5) multiply by total word in string:${multi}\n`);
}
operator();
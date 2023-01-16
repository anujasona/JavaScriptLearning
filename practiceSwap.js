function swapDetails( val1,val2,val3){
    console.log("************befoe Swap***********");
    console.log("Before Swap Values Are:",val1,val2,val3);
    console.log("**********After Swap****************");
    var val4=val1;
    val1=val2;
    val2=val3;
    val3=val4;
    console.log("After Swap Values: Val1","Val2","Val3");
    console.log("                   ",val1, val2,val3);
}
swapDetails(400,600,800);
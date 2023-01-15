function countCharA(sentence)
 {
    var count=0;
    for (let index=0;index<=sentence.length;index++) {
        var char=sentence.charAt(index);
        if (char=='A'||char=='a')
         {
        
       count=count+1;
        }
        
    }
    console.log(`${sentence}`);
    console.log(`${count}`);

}
countCharA(`"I AM Learning JavaScript,The Language of internet"`);
countCharA(`"My favourite movie is LAggAn"`);
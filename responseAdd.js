const response = {
    maran: {
        count: 1,
    },
    gas: {
      count: 2,
    },
    prelude: {
        count: 5,
    },
    keys: [`maran`, `gas`,`prelude`],
};
let add = 0;
for(let sum of response.keys){
    add = add + response[sum].count;
}
console.log(`Sum of count values is: ${add}`);
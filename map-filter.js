//square making with map(function(element, index, array))
//map can have 3 parameters.


const numbers = [2,1,4,3,7,6,10];
// const output = [];

// for(let i = 0;i < numbers.length;i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// function square(element){
//     return element * element
// }

// const square2 = (element) => element * element;
// console.log(square2(2));

// const result = numbers.map(function(element, index,array){
//     return element * element;
// })
// const result = numbers.map(x => x * x);
// console.log(result);


const bigger = numbers.filter(x => x < 5);       //filter() fullfil the condition.

const isThere = numbers.find(x => x > 5);        //this will find the condition but return only one value if the condition is true.

console.log(isThere);
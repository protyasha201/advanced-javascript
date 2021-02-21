// let func = new Function ([arg1, arg2, ...arg3], functionBody)

let sum = new Function('a', 'b', 'return a+b');
console.log(sum(2,4));
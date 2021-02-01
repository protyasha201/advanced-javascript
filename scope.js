//Scope, block scope, access outer scope variable.

//let is block scope.
//variables outside a block is global variable.
//var can be used any where.means it is non-block scoped.it is available in anywhere and it is called hoisting.
let bonus = 2;
function sum(first, second){
    let result = first + second + bonus;   //here i can use bonus because it is a global variable.
    console.log(bonus);
    if(result > 9){
        const mood = "Happy";
        console.log(mood);
    }
    // console.log(mood);    //this line is error because mood is declared inside a condition.
    console.log(day);   //var can not be consoled before declaring.this will show undefined.
    var day = "friday";

    // console.log(anotherDay);      //this is same as var consoling before declaration.and this gives a error
    let anotherDay = "saturday";
    return result;
}

const output = sum(3, 7);
console.log(output);
console.log(bonus);
// console.log(result);  //this line will be a error because result is inside the function means it's not his scope here to console.log().
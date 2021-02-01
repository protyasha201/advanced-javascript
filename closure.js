function clock(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = clock();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());



const clock2 = clock();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());

const students = [
    {id: 21, nameIs: "hell"},
    {id: 23, nameIs: "boy"},
    {id: 54, nameIs: "mew"},
    {id: 78, nameIs: "deep"}
];

//showing names using for loop.
// const names = [];
// for(let i = 0;i < students.length;i++){
//     const element = students[i].nameIs;
//     names.push(element);
// }

//showing names and id's using map().

const namesAre = students.map(s => s.nameIs);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 50);
const biggerOne = students.find(s => s.id > 50);

console.log(biggerOne);
console.log(bigger);
console.log(ids);
console.log(namesAre);
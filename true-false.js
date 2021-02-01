//when it is true and false.


//false values.
//0.
//"".
//undefined
//NaN.
//null.
//false



//true values.
//'0', " ", [].
const country = null;   //null is false
// const hisName;    //this will a false.
let theirName = NaN;  //it will show false
const age = 0; //number bigger than 0 is true
const myName = "";   //any string including space is also true
if(theirName){            //if any number is 0 then it will be false.if any string is empty then it is false.
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
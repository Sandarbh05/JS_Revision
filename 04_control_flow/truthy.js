const userEmail = "sandarbh@google.com" //truthy
// const userEmail = "" //falsy
// const userEmail = []
// const userEmail = {}

if(userEmail){
    console.log("Got user email");
    
} else{
    console.log("Don't have user email");
    
}

//Only falsy values:
// false, 0, "", -0, BigInt 0n, null, undefined, NaN

//Some surprising truthy values: 
// "0", 'false', " ", [], {}, function(`empty function`){}

//For empty array checking
// if(userEmail.length ==== 0){ 
//     console.log("Array is emtpy");
// }

//For empty object checking
// const emptyObj={}
// if(Object.keys(emptyObj).length ===0){
//     console.log("Object is empty");
// }

// false == 0 //true
// false == "" //true
// 0 == "" //true

//Nullish Coalescing Operator (??): null undefined
//Works as a safety check for null value
let val1;
// val1=5??10  //5
// val1=null??10 //10
// val1=undefined??15 //15
val1=null??10??20 //10
console.log(val1);

//Ternary Operator
// condition ? true : false --> syntax
const iceTea = 100
iceTea<=80? console.log("less than 80"): console.log("more than 80");




// let a = 10
// const b = 20
// var c = 30

// {} --> Scope
var c = 300
let a = 300
const b = 20 //Const is also Local Scoped
if(true){
    let a = 10 //Let is Local Scoped
    var c = 30 //Var is Global Scoped, old values of declared/defined c is overwritten, even if we write c=30 here
    console.log("Inner", a );
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

console.log(a);
console.log(b);
console.log(c);


/** IMPORTANT : The scope of the code itself when we run using node has the different global scope compared to the scope of the browser**/
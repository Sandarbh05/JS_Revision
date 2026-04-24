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

// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
// }

console.log(a);
console.log(b);
console.log(c);


/** IMPORTANT : The scope of the code itself when we run using node has the different global scope compared to the scope of the browser **/

function one(){
    const username = "sandarbh"
    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website); //Cant access value from children scoped block
    two()
}

// one()

if(true){
    const username = "sandarbh"
    if(username == "sandarbh"){
        const website = " github" 
        console.log(username + website);
    }
    // console.log(website); //Cant be accessed outside the scope
}
// console.log(username); //Cant be accessed outside the scope

// +++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5)) //Cant Access addOne function as definition are processed before everything else in JS
function addOne(num){
    return num+1
}
// addOne(5)

console.log(addTwo(5)); //Can't Access addTwo function before it's definition as its a variable function
const addTwo = function (num){ //Hold function in a variable
    return num+2
}

// addTwo(5)
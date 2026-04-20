// According to original documentation of js : 
// Datatypes has only been divided based on how they are stored in the memory --> call by value and call by reference which is :    
// Primitive & Non-Primitive

//Primitive : Changes are made on the copy of the original data
// 7 types : String, Number, Boolean, Null, Undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //By defaults its assigned undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 32332423423434432432327n

//Non-Primitive (Reference Type) : Changes are made directly into the memory
// Arrays, Objects, Functions


//Arrays
const heros = ["shaktimaan", "naagraj", "doga"]

//Objects
let myObj = {
    name: "sandarbh",
    age: 22
}

//Functions
const fun = function(){
    console.log("hello world")
}

console.log(typeof bigNumber) //bigInt
console.log(typeof outsideTemp) //Object
console.log(typeof scoreValue) //Number

//type of Table :
//Undefined --> Undefined
//Null --> Object
//Boolean --> Boolean
//Number --> Number
//String --> String
//Object(native or host and does implement [[call]]) --> function
//Object(native or host and does not implement [[call]]) --> Implementation-defined except may not be "undefined", "boolean", "number", or "string"
//Arrays --> Object
//Function --> Function

// For more info:
// https://262.ecma-international.org/5.1/#sec-11.4.3

// Js mastery --> Objects & Browser Events
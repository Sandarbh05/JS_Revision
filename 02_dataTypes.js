"use strict"; // treat all js code as a newer version 

// alert(2+3) // Only allowed in browser not node.js

//tc39.es --> original documentation of ecma script for js
//mdn reference --> documentation for html, css & js by mozilla group


let name = "sandarbh" //string
let age = 18 //number
let isloggedIn = false //boolean
let state; //On printing gives undefined

//Primitive data types
//string --> ""
//number --> 8
// boolean --> true/ false
//bigInt
//null --> standalone value --> Represent empty value
//undefined --> shows that variable is declared but never assigned a value
//symbol --> unique

//object

console.log(typeof null) //gives object
console.log(typeof undefined) //gives undefined

const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false - they are unique!

let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score) 
//Strings are converted to numbers, "33" => 33
// not number strings are converted to NaN like "33abc", "33abc" => NaN
// null values are converted to 0, null => 0
// undefined values are also converted to NaN, undefined => NaN
// boolean values are converted to equivalent 1 & 0, true => 1; false => 0
// full strings are also converted to NaN, abc => NaN

// console.log(typeof valueInNumber, valueInNumber); 

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// converts to true/false on 1 & 0, whereas any non-empty string => true and empty string => false
// "" => false
// "sandarbh" => true

// console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
// converts number to string, 33 => "33"
// console.log(typeof stringNumber);

// ***************************** Operations *****************************
let value = 3
let negValue = -value
// console.log(negValue);

//Arithmetic Operations
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)
// console.log(2**2)

//Concatenation
let str1 = "hello"
let str2 = "sandarbh"
let str3 = str1+str2
// console.log(str3)

//Confusing Operations
// console.log("1" + 2) //12
// console.log("1" + "2") //12
// console.log("1" + 2 + 2) //122
// console.log(1 + 2 + "2") //32
// console.log(+true) //1
// console.log(true+) //Error
// console.log(+"") //0

let num1, num2, num3 
num1 = num2 = num3 = 2+2

let gameCounter=100;
gameCounter++; //Post fix --> Use the value then increment
++gameCounter; //Pre fix --> Increase the value then use
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.
// html#sec-type-conversion
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

console.log(typeof stringNumber);
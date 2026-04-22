// "hello" + "world" --> concatenation

const name = "sandarbh"
const repoCount = 19

console.log(name + repoCount + " Value")

//Using string interpolation --> injection of variables directly into placeholders
console.log(`Hello my name is ${name.toUpperCase()} & my repo count is ${repoCount}`)

//String Declaration :
const gameName = new String('Brawl-Stars') // Its actually an object with keys being its index and value is each letter
console.log(typeof gameName, typeof "Brawl Stars"); //object , string

//Keys accessing :
console.log(gameName[0])
console.log(gameName.__proto__)
//Here the thing is for any object the keys are values are present, extra key added are value and [[Protype]], prototype is the one which contains all related methods like toUpperCase, etc etc 

console.log(gameName.toUpperCase())
//But we don't need to access methods using .proto .proto chains, js drills through the object already, like above example

console.log(gameName.length) //We can access all other methods using this way
console.log(gameName.charAt(2)); //To find the character present at the specific index location
console.log(gameName.indexOf("S")); //To find the location of the first character of the same type encountered

const newStr = gameName.substring(0, 5) //Dividing a string into a sub string, it can't use negative values
console.log(newStr)

const anotherStr = gameName.slice(-11, 4) //Slice can also use negative values
console.log(anotherStr)

const newStr1 = "    sandarbh  "
console.log(newStr1)
console.log(newStr1.trim())
//Trim strips whitespaces-->white space + line terminators 
//We can also use trimStart and trimEnd methods

const url = "https://sandarbh.com/sandarbh%20vansh"

console.log(url.replace('%20', "-")) //Making url reusable by replacing unnecessary codes

console.log(url.includes("sand")); //Check if particular substring present in the string

console.log(gameName.split("-")) //split(separator, limit) --> syntax